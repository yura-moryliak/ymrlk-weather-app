import {Component, inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Observable} from 'rxjs';

import {WeatherInterface} from '../../interfaces/weather.interface';
import {CreditsService} from '../../services/credits.service';

@Component({
  selector: 'ymrlk-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherComponent implements OnInit {

  @Input() weatherData!: WeatherInterface;

  isCreditsComponentOpened$!: Observable<boolean>;

  private creditsService: CreditsService = inject(CreditsService);

  ngOnInit(): void {
    this.isCreditsComponentOpened$ = this.creditsService.isOpened$;
  }

  openCredits(): void {
    this.creditsService.open();
  }
}
