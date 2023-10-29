import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgxGaugeModule} from "ngx-gauge";

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

  markersMB = {
    "960": { color: '#555', size: 3, label: '960', type: 'line', font: '5px'},
    "970": { color: '#555', size: 3, label: '970', type: 'line', font: '5px'},
    "980": { color: '#555', size: 3, label: '980', type: 'line', font: '5px'},
    "990": { color: '#555', size: 3, label: '990', type: 'line', font: '5px'},
    "1000": { color: '#555', size: 3, label: '1000', type: 'line', font: '5px'},
    "1010": { color: '#555', size: 3, label: '1010', type: 'line', font: '5px'},
    "1020": { color: '#555', size: 3, label: '1020', type: 'line', font: '5px'},
    "1030": { color: '#555', size: 3, label: '1030', type: 'line', font: '5px'},
    "1040": { color: '#555', size: 3, label: '1040', type: 'line', font: '5px'},
    "1050": { color: '#555', size: 3, label: '1050', type: 'line', font: '5px'},
    "1060": { color: '#555', size: 3, label: '1060', type: 'line', font: '5px'},
    "1070": { color: '#555', size: 3, label: '1070', type: 'line', font: '5px'}
  };
}
