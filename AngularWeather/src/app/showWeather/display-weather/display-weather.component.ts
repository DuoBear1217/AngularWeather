import { CommonModule } from '@angular/common';
import { WeatherService } from './../weather.service';
import { Component,OnInit } from '@angular/core';

interface Weather {
  time: string;
  element: string;
  // PoP: string;
  // wx: string;
  // wet: string;
  // wind: string;
}

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class DisplayWeatherComponent {
  // weather: Weather[] = [
  //   {
  //     time: '2023/9/13 18:00:00',
  //     element: '晴時多雲。降雨機率 20%。溫度攝氏25至29度。舒適。東南風 風速<= 1級(每秒1公尺)。相對濕度77%。',
  //   }
  // ];

  // constructor(private weatherService: WeatherService) {}

  // async ngOnInit(): Promise<void> {
  //   await this.weatherService.getWeatherData().subscribe((data)=> {
  //     this.weather = data;
  //     console.log(data);
  //   })
  //   console.log(this.weather);
  // }

  // show() {
  //   console.log(this.weatherService.getCityWeather());
  // }

  weather: Weather[] = [];

  constructor(private weatherService: WeatherService) {}

  async ngOnInit(): Promise<void> {
    this.weather = await this.weatherService.getCityWeather();
  }

  show() {
    console.log(this.weather);
  }

}
