import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  pos: Position;
  latitude = -37.8086396408671;
  longitude = 144.96066212654114;
  latPerth = -31.953512;
  longPerth = 115.857048;
  latSydney = 	-33.865143;
  longSydney = 	151.209900;
  latAdelaide = -34.9287;
  longAdelaide = 138.5999;
  latBrisbane = -27.4709;
  longBrisbane = 153.0235;
  data = new Weather(null,null,null,null,null,null,null,null,null,null,null)
  dataPerth = new Weather(null,null,null,null,null,null,null,null,null,null,null)
  dataAdelaide = new Weather(null,null,null,null,null,null,null,null,null,null,null)
  dataBrisbane = new Weather(null,null,null,null,null,null,null,null,null,null,null)
  dataSydney = new Weather(null,null,null,null,null,null,null,null,null,null,null)




  constructor(private locationService: WeatherService) {

  }

  ngOnInit() {
    this.getCurrentLocation();
  }
  getCurrentWeather(){
      //modulise this later (only for testing purposes due to tight timeframe)
    this.locationService.getCurrentWeather(this.latitude, this.longitude)
      .subscribe(weather => {
        this.data.currentLocationTemp = weather["currently"]["temperature"],
        this.data.wind = weather["currently"]["windSpeed"],
        this.data.humidity = weather["currently"]["humidity"],
        this.data.summary = weather["currently"]["summary"],
        this.data.icon = weather["currently"]["icon"],
        this.data.windBearing = weather["currently"]["windBearing"],
        this.data.rainIntensity = weather["currently"]["precipIntensity"],
        this.data.pressure = weather["currently"]["pressure"],
        this.data.chanceOfRain = weather["currently"]["precipProbability"],
        this.data.cloudcover = weather["currently"]["cloudCover"],
        this.data.ozone = weather["currently"]["ozone"]
        console.log("weather is : ", this.data);

        this.data.currentLocationTemp = (((this.data.currentLocationTemp - 32) * 5) / 9);
 
      },
      error => console.error(error));

    this.locationService.getCurrentWeather(this.latPerth, this.longPerth)
      .subscribe(weather => {
        this.dataPerth.currentLocationTemp = weather["currently"]["temperature"],
        this.dataPerth.wind = weather["currently"]["windSpeed"],
        this.dataPerth.humidity = weather["currently"]["humidity"],
        this.dataPerth.summary = weather["currently"]["summary"],
        this.dataPerth.icon = weather["currently"]["icon"],
        this.dataPerth.windBearing = weather["currently"]["windBearing"],
        this.dataPerth.rainIntensity = weather["currently"]["precipIntensity"],
        this.dataPerth.pressure = weather["currently"]["pressure"],
        this.dataPerth.chanceOfRain = weather["currently"]["precipProbability"],
        this.dataPerth.cloudcover = weather["currently"]["cloudCover"],
        this.dataPerth.ozone = weather["currently"]["ozone"]
        console.log("weather is : ", this.dataPerth);

        this.dataPerth.currentLocationTemp = (((this.dataPerth.currentLocationTemp - 32) * 5) / 9);
      },
      error => console.error(error));

    this.locationService.getCurrentWeather(this.latAdelaide, this.longAdelaide)
      .subscribe(weather => {
        this.dataAdelaide.currentLocationTemp = weather["currently"]["temperature"],
        this.dataAdelaide.wind = weather["currently"]["windSpeed"],
        this.dataAdelaide.humidity = weather["currently"]["humidity"],
        this.dataAdelaide.summary = weather["currently"]["summary"],
        this.dataAdelaide.icon = weather["currently"]["icon"],
        this.dataAdelaide.windBearing = weather["currently"]["windBearing"],
        this.dataAdelaide.rainIntensity = weather["currently"]["precipIntensity"],
        this.dataAdelaide.pressure = weather["currently"]["pressure"],
        this.dataAdelaide.chanceOfRain = weather["currently"]["precipProbability"],
        this.dataAdelaide.cloudcover = weather["currently"]["cloudCover"],
        this.dataAdelaide.ozone = weather["currently"]["ozone"]
        console.log("weather is : ", this.dataAdelaide);
         this.dataAdelaide.currentLocationTemp = (((this.dataAdelaide.currentLocationTemp - 32) * 5) / 9);
      },
      error => console.error(error));

    this.locationService.getCurrentWeather(this.latSydney, this.longSydney)
      .subscribe(weather => {
        this.dataSydney.currentLocationTemp = weather["currently"]["temperature"],
        this.dataSydney.wind = weather["currently"]["windSpeed"],
        this.dataSydney.humidity = weather["currently"]["humidity"],
        this.dataSydney.summary = weather["currently"]["summary"],
        this.dataSydney.icon = weather["currently"]["icon"],
        this.dataSydney.windBearing = weather["currently"]["windBearing"],
        this.dataSydney.rainIntensity = weather["currently"]["precipIntensity"],
        this.dataSydney.pressure = weather["currently"]["pressure"],
        this.dataSydney.chanceOfRain = weather["currently"]["precipProbability"],
        this.dataSydney.cloudcover = weather["currently"]["cloudCover"],
        this.dataSydney.ozone = weather["currently"]["ozone"]
        console.log("weather is : ", this.dataSydney);
         this.dataSydney.currentLocationTemp = (((this.dataSydney.currentLocationTemp - 32) * 5) / 9);
      },
      error => console.error(error));

          this.locationService.getCurrentWeather(this.latBrisbane, this.longBrisbane)
      .subscribe(weather => {
        this.dataBrisbane.currentLocationTemp = weather["currently"]["temperature"],
        this.dataBrisbane.wind = weather["currently"]["windSpeed"],
        this.dataBrisbane.humidity = weather["currently"]["humidity"],
        this.dataBrisbane.summary = weather["currently"]["summary"],
        this.dataBrisbane.icon = weather["currently"]["icon"],
        this.dataBrisbane.windBearing = weather["currently"]["windBearing"],
        this.dataBrisbane.rainIntensity = weather["currently"]["precipIntensity"],
        this.dataBrisbane.pressure = weather["currently"]["pressure"],
        this.dataBrisbane.chanceOfRain = weather["currently"]["precipProbability"],
        this.dataBrisbane.cloudcover = weather["currently"]["cloudCover"],
        this.dataBrisbane.ozone = weather["currently"]["ozone"]
        console.log("weather is : ", this.dataBrisbane);
         this.dataBrisbane.currentLocationTemp = (((this.dataBrisbane.currentLocationTemp - 32) * 5) / 9);
      },
      error => console.error(error));



  }

  getCurrentLocation(){
    this.getCurrentWeather()

  }



}
