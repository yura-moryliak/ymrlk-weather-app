import {Directive, ElementRef, inject, OnInit} from "@angular/core";

@Directive({
  selector: '[ymrlkScrollTo]',
  standalone: true
})
export class ScrollToDirective implements OnInit {

  private elRef: ElementRef = inject(ElementRef);

  ngOnInit(): void {
    this.scrollIntoView();
  }

  private scrollIntoView(): void {
    if (this.elRef.nativeElement.classList.contains('current-hour')) {
      setTimeout(() =>
          this.elRef.nativeElement.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'center' }),
          100
      );
    }
  }
}
