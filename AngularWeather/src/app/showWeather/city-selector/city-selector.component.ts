import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { WeatherService } from '../weather.service';
import { WeatherContentComponent } from '../weather-content/weather-content.component';

export interface City {
  name: string;
}

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    MatSlideToggleModule,
    AsyncPipe,
    MatCardModule,
    CommonModule,
    WeatherContentComponent
  ],
})
export class CitySelectorComponent implements OnInit{

  stateCtrl = new FormControl('');
  filteredStates!: Observable<City[]>;
  selectedCity: string='';

  cities: City[] = [
    {name: 'test'}
  ];

  constructor(
    private WeatherService:WeatherService
  ) { }

  async ngOnInit() {
      this.cities = await this.WeatherService.selectCity();
      this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.cities.slice())),
    );
  }

  private _filterStates(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(state => state.name.toLowerCase().includes(filterValue));
  }

  selectCity(selected: string) {
    this.selectedCity = selected;
    this.WeatherService.selectedCity = selected;
  }
}
