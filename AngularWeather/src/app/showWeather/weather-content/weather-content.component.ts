import { WeatherService } from './../weather.service';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DisplayWeatherComponent } from '../display-weather/display-weather.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-weather-content',
  templateUrl: './weather-content.component.html',
  styleUrls: ['./weather-content.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    DisplayWeatherComponent,
    RouterModule,
    MatButtonToggleModule
  ]
})

export class WeatherContentComponent {

  @Input()city: string = 'test';

  constructor(private WeatherService:WeatherService) {

  }

  cityWeather() {
    this.WeatherService.getCityWeather();
    this.WeatherService.getCityTodayWeather();
  }

}
