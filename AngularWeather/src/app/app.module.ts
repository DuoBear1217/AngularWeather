import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CitySelectorComponent } from './showWeather/city-selector/city-selector.component';
import { WeatherContentComponent } from './showWeather/weather-content/weather-content.component';
import { CodeTransPipe } from './code-trans.pipe';
import { DisplayWeatherComponent } from './showWeather/display-weather/display-weather.component';
import { DisplayDayWeatherComponent } from './showWeather/display-day-weather/display-day-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeTransPipe,
    DisplayDayWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    NavbarComponent,
    FooterComponent,
    CitySelectorComponent,
    WeatherContentComponent,
    DisplayWeatherComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
