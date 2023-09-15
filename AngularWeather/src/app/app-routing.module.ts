import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayWeatherComponent } from './showWeather/display-weather/display-weather.component';
import { DisplayDayWeatherComponent } from './showWeather/display-day-weather/display-day-weather.component';

const routes: Routes = [
  {
    path: 'week',
    component: DisplayWeatherComponent
  },
  {
    path: 'today',
    component: DisplayDayWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
