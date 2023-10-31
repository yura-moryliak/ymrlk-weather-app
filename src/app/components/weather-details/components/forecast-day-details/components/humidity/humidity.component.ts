import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'ymrlk-humidity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HumidityComponent {
  @Input() humidity: number = 0;
}
