import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'ymrlk-feels-like',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feels-like.component.html',
  styleUrls: ['./feels-like.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeelsLikeComponent {
  @Input() temperatureC!: number;
  @Input() temperatureF!: number;
}
