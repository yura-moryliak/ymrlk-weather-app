import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCurrentInfoComponent } from './weather-current-info.component';

describe('WeatherCurrentInfoComponent', () => {
  let component: WeatherCurrentInfoComponent;
  let fixture: ComponentFixture<WeatherCurrentInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WeatherCurrentInfoComponent]
    });
    fixture = TestBed.createComponent(WeatherCurrentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
