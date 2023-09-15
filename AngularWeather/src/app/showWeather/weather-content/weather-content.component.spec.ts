import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContentComponent } from './weather-content.component';

describe('WeatherContentComponent', () => {
  let component: WeatherContentComponent;
  let fixture: ComponentFixture<WeatherContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherContentComponent]
    });
    fixture = TestBed.createComponent(WeatherContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
