import {CreditLinkTargetType} from '../enums/credit-link-target-type.enum';

export interface CreditLink {
  link: string;
  title: string;
  target: CreditLinkTargetType;
  caption?: string;
  img: {
    src: string;
    alt: string;
    border?: number;
  }
}
