import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UvIndexTypeEnum} from "../../../../../../enums/uv-index-type.enum";
import {UVLevelInterface} from "../../../../../../interfaces/uv-index/uv-level.interface";

@Component({
  selector: 'ymrlk-uv-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uv-index.component.html',
  styleUrls: ['./uv-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UvIndexComponent {

  @Input({ required: true }) uvIndex: number = 0;

  readonly UVLevelsList: UVLevelInterface[] = [
    {
      index: 0,
      type: UvIndexTypeEnum.Low,
      color: `background-image: linear-gradient(
              90deg,
              hsl(115deg 100% 49%) 0%,
              hsl(115deg 100% 49%) 50%,
              hsl(115deg 100% 49%) 100%
            );`
    },
    {
      index: 1,
      type: UvIndexTypeEnum.Low,
      color: `background-image: linear-gradient(
              90deg,
              hsl(115deg 100% 49%) 0%,
              hsl(96deg 100% 49%) 50%,
              hsl(86deg 100% 49%) 100%
            );`
    },
    {
      index: 2,
      type: UvIndexTypeEnum.Low,
      color: `background-image: linear-gradient(
              90deg,
              hsl(86deg 100% 49%) 0%,
              hsl(77deg 100% 49%) 50%,
              hsl(69deg 100% 49%) 100%
            );`
    },
    {
      index: 3,
      type: UvIndexTypeEnum.Moderate,
      color: `background-image: linear-gradient(
              90deg,
              hsl(69deg 100% 49%) 0%,
              hsl(65deg 100% 49%) 50%,
              hsl(61deg 100% 49%) 100%
            );`
    },
    {
      index: 4,
      type: UvIndexTypeEnum.Moderate,
      color: `background-image: linear-gradient(
              90deg,
              hsl(61deg 100% 49%) 0%,
              hsl(50deg 100% 49%) 50%,
              hsl(40deg 100% 49%) 100%
            );`
    },
    {
      index: 5,
      type: UvIndexTypeEnum.Moderate,
      color: `background-image: linear-gradient(
              90deg,
              hsl(40deg 100% 49%) 0%,
              hsl(35deg 100% 49%) 50%,
              hsl(29deg 100% 49%) 100%
            );`
    },
    {
      index: 6,
      type: UvIndexTypeEnum.High,
      color: `background-image: linear-gradient(
              90deg,
              hsl(29deg 100% 49%) 0%,
              hsl(25deg 100% 49%) 50%,
              hsl(20deg 100% 49%) 100%
            );`
    },
    {
      index: 7,
      type: UvIndexTypeEnum.High,
      color: `background-image: linear-gradient(
              90deg,
              hsl(20deg 100% 49%) 0%,
              hsl(14deg 100% 49%) 50%,
              hsl(0deg 100% 49%) 100%
            );`
    },
    {
      index: 8,
      type: UvIndexTypeEnum.Very_High,
      color: `background-image: linear-gradient(
              90deg,
              hsl(0deg 100% 49%) 0%,
              hsl(337deg 50% 57%) 50%,
              hsl(210deg 100% 49%) 100%
            );`
    },
    {
      index: 9,
      type: UvIndexTypeEnum.Very_High,
      color: `background-image: linear-gradient(
              90deg,
              hsl(210deg 100% 49%) 0%,
              hsl(221deg 96% 71%) 50%,
              hsl(223deg 96% 81%) 100%
            );`
    },
    {
      index: 10,
      type: UvIndexTypeEnum.Very_High,
      color: `background-image: linear-gradient(
              90deg,
              hsl(223deg 96% 81%) 0%,
              hsl(227deg 93% 84%) 50%,
              hsl(232deg 88% 87%) 100%
            );`
    },
    {
      index: 11,
      type: UvIndexTypeEnum.Extreme,
      color: `background-image: linear-gradient(
              90deg,
              hsl(232deg 88% 87%) 0%,
              hsl(232deg 91% 92%) 50%,
              hsl(231deg 100% 96%) 100%
            );`
    }
  ];

  trackByFn = (index: number, item: UVLevelInterface) => item.index;
}
