import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxGaugeModule} from 'ngx-gauge';

@Component({
  selector: 'ymrlk-pressure',
  standalone: true,
  imports: [
    CommonModule,
    NgxGaugeModule
  ],
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PressureComponent {
  @Input() pressureIN: number = 0;
  @Input() pressureMB: number = 0;
}
