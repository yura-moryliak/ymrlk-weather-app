import {Component, EventEmitter, inject, Input, OnInit, Output, ViewEncapsulation} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";

import {
  WeatherForecastDayInterface,
  WeatherForecastHourInterface
} from "../../../../interfaces/weather-forecast-day.interface";
import {WeatherCurrentInterface} from "../../../../interfaces/weather-current.interface";
import {ScrollToDirective} from "../../../../directives/scroll-to.directive";
import {UvIndexComponent} from "./components/uv-index/uv-index.component";

@Component({
  selector: 'ymrlk-forecast-day-details',
  standalone: true,
  imports: [CommonModule, ScrollToDirective, UvIndexComponent],
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

  private datePipe: DatePipe = inject(DatePipe);

  ngOnInit(): void {
    this.mapCurrentForecastHourItem();

    console.log(this.forecastDay);

    this.forecastDay.astro.sunrise = this.getTwentyFourHourTime(this.forecastDay.astro.sunrise);
    this.forecastDay.astro.sunset = this.getTwentyFourHourTime(this.forecastDay.astro.sunset);
  }

  close(): void {
    this.onClose.emit();
  }

  private mapCurrentForecastHourItem(): void {

    this.forecastDay.hour.map((forecastHour: WeatherForecastHourInterface): void => {

      const currentWeatherHour: string = this.datePipe.transform(this.currentWeather.last_updated, 'H:mm')?.split(':')[0]!;
      const hourForCurrentHourRange: string = this.datePipe.transform(forecastHour.time, 'H:mm')?.split(':')[0]!;

      if (currentWeatherHour === hourForCurrentHourRange && this.forecastDayIndex === 0) {
        forecastHour.isInTimeRange = true;
      }
    })
  }

  private getTwentyFourHourTime(AMPMTime: any): string {
    const date: Date = new Date(`${ this.forecastDay.date } ${ AMPMTime }`);
    return `${ (date.getHours() < 10 ? '0' : '') + date.getHours() }:${ (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() }`;
  }
}
