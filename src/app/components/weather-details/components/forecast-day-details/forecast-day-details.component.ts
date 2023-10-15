import {Component, EventEmitter, inject, Input, OnInit, Output, ViewEncapsulation} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";

import {
  WeatherForecastDayInterface,
  WeatherForecastHourInterface
} from "../../../../interfaces/weather-forecast-day.interface";
import {ScrollToDirective} from "../../../../directives/scroll-to.directive";

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
      if (this.datePipe.transform(forecastHour.time, 'H:mm')?.includes(new Date().getHours().toString()) && this.forecastDayIndex === 0) {
        forecastHour.isInTimeRange = true;
      }
    })
  }
}
