import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDayWeatherComponent } from './display-day-weather.component';

describe('DisplayDayWeatherComponent', () => {
  let component: DisplayDayWeatherComponent;
  let fixture: ComponentFixture<DisplayDayWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDayWeatherComponent]
    });
    fixture = TestBed.createComponent(DisplayDayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
