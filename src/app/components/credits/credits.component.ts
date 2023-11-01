import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'ymrlk-credits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreditsComponent {

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  closeCmp() {
    this.onClose.emit();
  }
}
