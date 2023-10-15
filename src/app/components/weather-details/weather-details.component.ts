import {
  Component, ComponentRef, EventEmitter, inject,
  Input, OnDestroy, OnInit, Output, Renderer2, ViewChild, ViewContainerRef, ViewEncapsulation
} from "@angular/core";
import {CommonModule} from "@angular/common";

import {Subscription} from "rxjs";

import {WeatherInterface} from "../../interfaces/weather.interface";
import {SearchedPlaceInterface} from "../../interfaces/searched-place.interface";
import {WeatherForecastDayInterface} from "../../interfaces/weather-forecast-day.interface";

import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import {WeatherForecastComponent} from "./components/weather-forecast/weather-forecast.component";
import {WeatherCurrentInfoComponent} from "./components/weather-current-info/weather-current-info.component";
import {ForecastDayDetailsComponent} from "./components/forecast-day-details/forecast-day-details.component";
import {WeatherAPIService} from "../../services/weather-api.service";

@Component({
  selector: 'ymrlk-weather-details',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, WeatherCurrentInfoComponent, WeatherForecastComponent],
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {

  @Input() weatherData!: WeatherInterface;
  @Output() selectedPlace: EventEmitter<SearchedPlaceInterface> = new EventEmitter<SearchedPlaceInterface>();

  @ViewChild('weatherDetailsContainerRef', { static: true, read: ViewContainerRef })
  weatherDetailsContainerRef!: ViewContainerRef;

  // TODO REMOVE AFTER...
  private weatherAPIService: WeatherAPIService = inject(WeatherAPIService);
  private renderer: Renderer2 = inject(Renderer2);
  private subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    // TODO REMOVE AFTER...
    // this.manageForecastDayDetails([this.weatherAPIService.mockedForecastDay, 0]);
  }

  selectedPlaceItem(place: SearchedPlaceInterface): void {
    this.selectedPlace.emit(place);
  }

  manageForecastDayDetails([forecastDay, forecastDayIndex]: [WeatherForecastDayInterface, number]): void {
    const cmpRef: ComponentRef<ForecastDayDetailsComponent> = this.weatherDetailsContainerRef.createComponent(ForecastDayDetailsComponent);
    this.setContainerVisibility();

    cmpRef.instance.forecastDay = forecastDay;
    cmpRef.instance.forecastDayIndex = forecastDayIndex;
    cmpRef.setInput('forecastDay', forecastDay);
    cmpRef.setInput('forecastDayIndex', forecastDayIndex);

    const forecastDayCloseSubscription: Subscription = cmpRef.instance.onClose.subscribe((): void => {
      this.setContainerVisibility(true);
      cmpRef.destroy();
    });

    this.subscriptions.add(forecastDayCloseSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private setContainerVisibility(show: boolean = false): void {
    this.renderer.setStyle(
        this.weatherDetailsContainerRef.element.nativeElement,
        'display',
        show ? 'grid' : 'none'
    );
  }
}
