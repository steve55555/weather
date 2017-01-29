import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  pos: Position;
  constructor(private locationService: WeatherService) {
    this.locationService.getCurrentLocation()
      .subscribe(position => {
        this.pos = position;
        this.locationService.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
          .subscribe(weather => console.log(weather),
          err => console.log(err))
      },
      err => console.error(err));
  }

  ngOnInit() {
  }

}
