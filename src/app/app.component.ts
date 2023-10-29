import {Component, inject, OnDestroy, OnInit, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";

import {EMPTY, Observable, Subscription, switchMap} from "rxjs";

import {Photo} from "pexels";

import {SimpleCoordsInterface} from "./interfaces/simple-coords.interface";
import {WeatherInterface} from "./interfaces/weather.interface";
import {SearchedPlaceInterface} from "./interfaces/searched-place.interface";

import {GeoPositionService} from "./services/geoposition.service";
import {WeatherAPIService} from "./services/weather-api.service";
import {PexelAPIClientService} from './services/pexel-api-client.service';

import {LoaderComponent} from "./components/loader/loader.component";
import {LoaderInitializerComponent} from "./components/loader/loader-initializer";
import {WeatherComponent} from "./components/weather/weather.component";
import {WeatherDetailsComponent} from "./components/weather-details/weather-details.component";

@Component({
  selector: 'ymrlk-root',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    WeatherComponent,
    WeatherDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends LoaderInitializerComponent implements OnInit, OnDestroy {

  weatherData!: WeatherInterface;
  backgroundImage!: Photo;

  private geoPositionService: GeoPositionService = inject(GeoPositionService);
  private weatherAPIService: WeatherAPIService = inject(WeatherAPIService);
  private photoAPIClientService: PexelAPIClientService = inject(PexelAPIClientService);

  private subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.geoPositionService.initGeoPosition();
    this.initWeatherData();

    // TODO REMOVE AFTER
    // this.weatherData = this.weatherAPIService.mockedData;
    // this.backgroundImage = this.photoAPIClientService.mockedPhoto;
  }

  getWeatherByPlace(place: SearchedPlaceInterface): void {
    const weatherDataSubscription: Subscription = this.weatherAPIService.getWeatherForecastByQuery(
        `${ place.name }, ${ place.region }, ${ place.country }`
    ).subscribe((weatherData: WeatherInterface) => {
      this.weatherData = weatherData;
      this.initBackgroundImage();
    });

    this.subscriptions.add(weatherDataSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initWeatherData(): void {
    const weatherDataSubscription: Subscription = this.geoPositionService.isLocating$.pipe(
        switchMap((isLocatingPosition: boolean): Observable<SimpleCoordsInterface> | Observable<never> => {

          if (!isLocatingPosition) {
            return this.geoPositionService.positionCoordinates$;
          }

          this.showLoader();
          return EMPTY;

        }),
        switchMap((geoPosition: SimpleCoordsInterface) => this.weatherAPIService.getWeatherForecastByCoordinates(geoPosition))
    ).subscribe({
      next: (weatherData: WeatherInterface): void => {
        this.weatherData = weatherData;

        this.initBackgroundImage()
        this.hideLoader();
      },
      error: (error: any) => console.log('GeoPositionService: isLocating$: Error: ', error)
    });

    this.subscriptions.add(weatherDataSubscription);
  }

  private initBackgroundImage(): void {
    this.backgroundImage = this.photoAPIClientService.cachedPhotos[this.getRandomItem(this.photoAPIClientService.cachedPhotos)] as Photo;
  }

  private getRandomItem(items: any[]): number {
    return Math.floor((Math.random() * items?.length));
  }
}
