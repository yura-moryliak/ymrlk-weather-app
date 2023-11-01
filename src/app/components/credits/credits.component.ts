import {Component, inject, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreditLinkTargetType} from '../../enums/credit-link-target-type.enum';
import {CreditLink} from '../../interfaces/credit-link.interface';

import {CreditsService} from '../../services/credits.service';

@Component({
  selector: 'ymrlk-credits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreditsComponent {

  apisLinksList: CreditLink[] = [
    {
      link: 'https://www.weatherapi.com/',
      title: 'Free Weather API',
      target: CreditLinkTargetType.Blank,
      img: {
        src: '//cdn.weatherapi.com/v4/images/weatherapi_logo.png',
        alt: 'Weather data by WeatherAPI.com',
        border: 0
      }
    },
    {
      link: 'https://www.pexels.com/api/',
      title: 'Pexel API',
      target: CreditLinkTargetType.Blank,
      img: {
        src: 'https://images.pexels.com/lib/api/pexels.png',
        alt: 'Back link for Pexel API service',
        border: 0
      }
    }
  ];

  externalLibsLinksList: CreditLink[] = [
    {
      link: 'https://github.com/angular/components/tree/main/src/cdk',
      title: 'Angular CDK',
      target: CreditLinkTargetType.Blank,
      caption: 'Angular CDK',
      img: {
        src: 'https://camo.githubusercontent.com/2d71b0a23f1207fe0276b15d7c711fe8eb77fcc4e11372ad523a914d13a9580c/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61722f616e67756c61722e706e67',
        alt: 'github angular cdk',
        border: 0
      }
    },
    {
      link: 'https://github.com/ashish-chopra/ngx-gauge#readme',
      title: 'Ngx Gauge',
      target: CreditLinkTargetType.Blank,
      caption: 'Ngx Gauge',
      img: {
        src: 'https://raw.githubusercontent.com/ashish-chopra/angular-gauge/master/examples/examples.png',
        alt: 'github ngx gauge',
        border: 0
      }
    }
  ];

  meLinksList: CreditLink[] = [
    {
      link: 'https://www.linkedin.com/in/yuramoryliak/',
      title: 'Yura Moryliak LinkedIn',
      target: CreditLinkTargetType.Blank,
      caption: 'LinkedIn',
      img: {
        src: 'https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png',
        alt: 'linkedin-ymrlk',
        border: 0
      }
    },
    {
      link: 'https://github.com/yura-moryliak/ymrlk-weather-app',
      title: 'Yura Moryliak Github',
      target: CreditLinkTargetType.Blank,
      caption: 'Github',
      img: {
        src: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
        alt: 'github-ymrlk',
        border: 0
      }
    },
  ];

  private creditsService: CreditsService = inject(CreditsService);

  close(): void {
    this.creditsService.close();
  }
}
