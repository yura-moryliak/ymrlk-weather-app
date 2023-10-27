import {Component, EventEmitter, Input, Output, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";

import {WeatherInterface} from "../../../../interfaces/weather.interface";
import {WeatherForecastDayInterface} from "../../../../interfaces/weather-forecast-day.interface";

@Component({
  selector: 'ymrlk-weather-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherForecastComponent {

  @Input() weatherData!: WeatherInterface;
  @Output() selectedForecastDay: EventEmitter<[WeatherForecastDayInterface, number]>
      = new EventEmitter<[WeatherForecastDayInterface, number]>();

  trackByFn = (index: number, item: WeatherForecastDayInterface) => item.date;

  openDay(forecastDay: WeatherForecastDayInterface, forecastDayIndex: number): void {
    this.selectedForecastDay.emit([forecastDay, forecastDayIndex]);
  }

}
