import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindAndGustComponent } from './wind-and-gust.component';

describe('WindAndGustComponent', () => {
  let component: WindAndGustComponent;
  let fixture: ComponentFixture<WindAndGustComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WindAndGustComponent]
    });
    fixture = TestBed.createComponent(WindAndGustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
