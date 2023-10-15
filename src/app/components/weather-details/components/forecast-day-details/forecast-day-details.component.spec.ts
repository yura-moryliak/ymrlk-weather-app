import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDayDetailsComponent } from './forecast-day-details.component';

describe('ForecastDayDetailsComponent', () => {
  let component: ForecastDayDetailsComponent;
  let fixture: ComponentFixture<ForecastDayDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ForecastDayDetailsComponent]
    });
    fixture = TestBed.createComponent(ForecastDayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
