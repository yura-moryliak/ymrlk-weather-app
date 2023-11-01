import {ComponentRef, Injectable, ViewContainerRef} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

import {CreditsComponent} from '../components/credits/credits.component';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  set vcr(vcr: ViewContainerRef) {
    if (!vcr) {
      return;
    }

    this.renderContainer = vcr;
  }

  get isOpened$(): Observable<boolean> {
    return this.isOpenedSubject.asObservable();
  }

  private renderContainer!: ViewContainerRef;
  private isOpenedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private creditsComponentRef!: ComponentRef<CreditsComponent> | null;

  open(): void {

    if (this.creditsComponentRef) {
      return;
    }

    this.isOpenedSubject.next(true);
    this.creditsComponentRef = this.renderContainer.createComponent(CreditsComponent);
  }

  close(): void {
    if (this.creditsComponentRef) {
      this.creditsComponentRef.destroy();
      this.creditsComponentRef = null;
      this.isOpenedSubject.next(false);
    }
  }
}
