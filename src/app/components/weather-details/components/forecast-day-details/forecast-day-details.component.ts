import {Component, EventEmitter, inject, Input, OnInit, Output, ViewEncapsulation} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";

import {
  WeatherForecastDayInterface,
  WeatherForecastHourInterface
} from "../../../../interfaces/weather-forecast-day.interface";
import {ScrollToDirective} from "../../../../directives/scroll-to.directive";
import {WeatherCurrentInterface} from "../../../../interfaces/weather-current.interface";

@Component({
  selector: 'ymrlk-forecast-day-details',
  standalone: true,
  imports: [CommonModule, ScrollToDirective],
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

  private datePipe: DatePipe = inject(DatePipe);

  ngOnInit(): void {
    this.mapCurrentForecastHourItem();
  }

  close(): void {
    this.onClose.emit();
  }

  private mapCurrentForecastHourItem(): void {

    this.forecastDay.hour.map((forecastHour: WeatherForecastHourInterface): void => {

      const currentWeatherHour: string = this.datePipe.transform(this.currentWeather.last_updated, 'H:mm')?.split(':')[0]!;
      const hourForCurrentHourRange: string = this.datePipe.transform(forecastHour.time, 'H:mm')?.split(':')[0]!;

      if (currentWeatherHour.includes(hourForCurrentHourRange) && this.forecastDayIndex === 0) {
        forecastHour.isInTimeRange = true;
      }

    })
  }
}
