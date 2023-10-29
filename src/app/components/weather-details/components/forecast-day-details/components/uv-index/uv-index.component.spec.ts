import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvIndexComponent } from './uv-index.component';

describe('UvIndexComponent', () => {
  let component: UvIndexComponent;
  let fixture: ComponentFixture<UvIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UvIndexComponent]
    });
    fixture = TestBed.createComponent(UvIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
