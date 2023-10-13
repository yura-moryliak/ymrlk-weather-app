import {Component, Input, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";

import {WeatherInterface} from "../../interfaces/weather.interface";

@Component({
  selector: 'ymrlk-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent {

  @Input() weatherData!: WeatherInterface;

}
