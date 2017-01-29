import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

    constructor(private locationService: WeatherService) {
    this.locationService.getCurrentLocation();
    this.locationService.getCurrentWeather(0,0)
      .subscribe(weather => console.log(weather),
      err => console.log(err))
    }

  ngOnInit() {
  }

}
