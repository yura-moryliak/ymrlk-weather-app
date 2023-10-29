import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'ymrlk-wind-and-gust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wind-and-gust.component.html',
  styleUrls: ['./wind-and-gust.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WindAndGustComponent {

  @Input() windKMH: number = 0;
  @Input() windMPH: number = 0;
  @Input() gustKMH: number = 0;
  @Input() gustMPH: number = 0;
  @Input() windDegree: number = 0;
  @Input({ required: true }) windDirection!: string;

}
