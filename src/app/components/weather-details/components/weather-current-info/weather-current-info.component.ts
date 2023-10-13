import {Component, Input, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";

import {WeatherInterface} from "../../../../interfaces/weather.interface";

@Component({
  selector: 'ymrlk-weather-current-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-current-info.component.html',
  styleUrls: ['./weather-current-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherCurrentInfoComponent {

  @Input() weatherData!: WeatherInterface;

}
