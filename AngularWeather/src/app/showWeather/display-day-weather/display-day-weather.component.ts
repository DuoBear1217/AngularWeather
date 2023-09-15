import { WeatherService } from './../weather.service';
import { Component } from '@angular/core';

export interface TodayWeather {
  time: string, desc: string ;
}

@Component({
  selector: 'app-display-day-weather',
  templateUrl: './display-day-weather.component.html',
  styleUrls: ['./display-day-weather.component.css']
})

export class DisplayDayWeatherComponent {
  weather: TodayWeather[] = [];

  constructor(private weatherService: WeatherService) {}

  async ngOnInit(): Promise<void> {
    this.weather = await this.weatherService.getCityTodayWeather();
  }

  show() {
    console.log(this.weather);
  }


}
