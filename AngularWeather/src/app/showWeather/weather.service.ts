import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

export interface City {
  name: string;
}

export interface Weather {
  time: string;
  element: string;
  // PoP: string;
  // wx: string;
  // wet: string;
  // wind: string;
}

export interface TodayWeather {
  // elementName: string;
  // time: {
  //   startTime: string;
  //   endTime: string;
  //   parameter: {
  //     parameterName: string;
  //     parameterUnit: string;
  //   };
  // };

    time: string;
    desc: string;

}

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  cities: City[] = [
    {name: 'test'}
  ];

  cityWeather: Weather[] = [];

  getWeatherData(): Observable<Weather[]> {
    return of(this.cityWeather);
  }

  cityTodayWeather: TodayWeather[] = [];

  getTodayWeatherData(): Observable<TodayWeather[]> {
    return of(this.cityTodayWeather);
  }

  selectedCity: string= '';

  constructor(private http: HttpClient) { }

  async selectCity(): Promise<City[]> {
    const response = await fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-CD094466-F0F5-46D5-B4CE-B55F5026618B')
    const data = await response.json();
    this.cities = data.records.location.map((city: any) => {
      return { name: city.locationName };
    });
    return this.cities;
  }

    // 預設是拿一周的天氣
    getCityWeather(): Promise<Weather[]> {
      console.log(`${encodeURI(this.selectedCity)}`);
      return this.http.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-CD094466-F0F5-46D5-B4CE-B55F5026618B&elementName=WeatherDescription&locationName=${encodeURI(this.selectedCity)}`)
        .pipe(
          map((data: any) => data.records.locations[0].location[0].weatherElement[0].time.map((weather: any) => ({
            wx: weather.startTime,
            element: weather.elementValue[0].value
          })))
        )
        .toPromise();
    }

    // 拿一天的天氣
    getCityTodayWeather(): Promise<TodayWeather[]> {
      return this.http.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-CD094466-F0F5-46D5-B4CE-B55F5026618B&elementName=Wx,PoP,MinT,MaxT&locationName=${encodeURI(this.selectedCity)}`)
        .pipe(
          map((data: any) => data.records.location[0].weatherElement.map((weather: any) => {
            console.log(weather);
            switch(weather.elementName) {
              case 'Wx':
                {
                  weather.time.forEach((element: any) => {
                    return  ['Wx'].push('{ time: element.startTime, desc: element.parameter.parameterName}')
                  });
                  break;
                }
              case 'PoP':
                {
                  weather.time.forEach((element: any) => {
                    return { PoP: { time: element.startTime, desc: element.parameter.parameterName}}
                  });
                  break;
                }
              case 'MinT':
                {
                  weather.time.forEach((element: any) => {
                    return { MinT: { time: element.startTime, desc: element.parameter.parameterName}}
                  });
                  break;
                }
              case 'MaxT':
                {
                  weather.time.forEach((element: any) => {
                    return { MaxT: { time: element.startTime, desc: element.parameter.parameterName}}
                  });
                  break;
                }
            }
          }
        )))
        .toPromise();
    }

    // 舊方法
    // const response = await fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-CD094466-F0F5-46D5-B4CE-B55F5026618B&elementName=WeatherDescription&locationName=' + encodeURI(this.selectedCity))
    // const data = await response.json();
    // let weatherData;
    // // console.log(data.records.locations[0].location[0].weatherElement[0].time);
    // weatherData = data.records.locations[0].location[0].weatherElement[0].time;
    // this.cityWeather = weatherData.map((weather: any) => {
      // console.log(weather.elementValue[0].value.split('。'));
      // let splitWeather = weather.elementValue[0].value.split('。');
      // for (let i = 0; i < splitWeather.length; i++) {
      //   if (i == 1 && (splitWeather[i].search('降雨')) !== -1) {
      //     alert("沒下雨");
      //   }
      //   e
      // }
    //   return {
    //     time: weather.startTime,
    //     temp: weather.elementValue[0].value
    //   }
    // });
    // // console.log(this.cityWeather);
    // return this.cityWeather;
  // }
}
