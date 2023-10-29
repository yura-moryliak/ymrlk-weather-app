import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'ymrlk-precipitation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './precipitation.component.html',
  styleUrls: ['./precipitation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrecipitationComponent {
  @Input() precipitationIN: number = 0;
  @Input() precipitationMM: number = 0;
}
