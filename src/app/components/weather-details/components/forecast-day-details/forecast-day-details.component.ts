import {Component, EventEmitter, inject, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {
  WeatherForecastDayInterface,
  WeatherForecastHourInterface
} from "../../../../interfaces/weather-forecast-day.interface";
import {WeatherCurrentInterface} from "../../../../interfaces/weather-current.interface";

import {ScrollToDirective} from "../../../../directives/scroll-to.directive";

import {UvIndexComponent} from "./components/uv-index/uv-index.component";
import {FeelsLikeComponent} from "./components/feels-like/feels-like.component";
import {WindAndGustComponent} from "./components/wind-and-gust/wind-and-gust.component";
import {PrecipitationComponent} from "./components/precipitation/precipitation.component";
import {PressureComponent} from "./components/pressure/pressure.component";
import {HumidityComponent} from "./components/humidity/humidity.component";

@Component({
  selector: 'ymrlk-forecast-day-details',
  standalone: true,
  imports: [CommonModule, ScrollToDirective, UvIndexComponent, FeelsLikeComponent, WindAndGustComponent, PrecipitationComponent, PressureComponent, HumidityComponent],
  templateUrl: './forecast-day-details.component.html',
  styleUrls: ['./forecast-day-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { 'class': 'is-opened' },
  providers: [DatePipe]
})
export class ForecastDayDetailsComponent implements OnInit {

  @Input() currentWeather!: WeatherCurrentInterface;
  @Input() forecastDay!: WeatherForecastDayInterface;
  @Input() forecastDayIndex: number = 0;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  trackByFn = (index: number, item: WeatherForecastHourInterface) => item.time;

  selectedForecastHour!: WeatherForecastHourInterface;

  private datePipe: DatePipe = inject(DatePipe);

  ngOnInit(): void {
    this.mapCurrentForecastHourItem();

    this.forecastDay.astro.sunrise = this.convertTime(this.forecastDay.astro.sunrise);
    this.forecastDay.astro.sunset = this.convertTime(this.forecastDay.astro.sunset);

    console.log(this.forecastDay.astro.sunrise);
    console.log(this.forecastDay.astro.sunset);
  }

  close(): void {
    this.onClose.emit();
  }

  openHourForecast(hour: WeatherForecastHourInterface): void {
    this.setCurrentForecastHourOutOfRange();
    this.selectedForecastHour = hour;
  }

  private mapCurrentForecastHourItem(): void {
    this.forecastDay.hour.map((forecastHour: WeatherForecastHourInterface): void => {

      const currentWeatherHour: string = this.datePipe.transform(this.currentWeather.last_updated, 'H:mm')?.split(':')[0]!;
      const hourForCurrentHourRange: string = this.datePipe.transform(forecastHour.time, 'H:mm')?.split(':')[0]!;

      if (this.forecastDayIndex !== 0) {
        this.selectedForecastHour = this.forecastDay.hour[0];
      }

      if (currentWeatherHour === hourForCurrentHourRange && this.forecastDayIndex === 0) {
        forecastHour.isInTimeRange = true;
        this.selectedForecastHour = forecastHour;
      }
    })
  }

  private setCurrentForecastHourOutOfRange(): void {
    this.forecastDay.hour.map((hour: WeatherForecastHourInterface): boolean => hour.isInTimeRange = false);
  }

  private convertTime = (timeStr: string) => {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = (parseInt(hours, 10) + 12).toString();
    }

    return `${hours}:${minutes}`;
  };
}
