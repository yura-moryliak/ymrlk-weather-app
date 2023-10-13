import {Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";

import {Subscription} from "rxjs";

import {WeatherInterface} from "../../interfaces/weather.interface";
import {SearchedPlaceInterface} from "../../interfaces/searched-place.interface";

import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import {WeatherCurrentInfoComponent} from "./components/weather-current-info/weather-current-info.component";
import {WeatherForecastComponent} from "./components/weather-forecast/weather-forecast.component";

@Component({
  selector: 'ymrlk-weather-details',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, WeatherCurrentInfoComponent, WeatherForecastComponent],
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherDetailsComponent implements OnDestroy {

  @Input() weatherData!: WeatherInterface;
  @Output() selectedPlace: EventEmitter<SearchedPlaceInterface> = new EventEmitter<SearchedPlaceInterface>();

  private subscriptions: Subscription = new Subscription();

  selectedPlaceItem(place: SearchedPlaceInterface): void {
    this.selectedPlace.emit(place);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
