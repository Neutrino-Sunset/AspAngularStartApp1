import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
   date: string;
   temperatureC: number;
   temperatureF: number;
   summary: string;
}

@Component({
   selector: 'app-page2',
   imports: [CommonModule],
   templateUrl: './page2.component.html',
   standalone: true
})
export class Page2Component implements OnInit {
   public forecasts: WeatherForecast[] = [];

   constructor(private http: HttpClient) { }

   ngOnInit() {
      this.getForecasts();
   }

   getForecasts() {
      this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
         (result) => {
            this.forecasts = result;
         },
         (error) => {
            console.error(error);
         }
      );
   }

   title = 'aspangularstartapp1.client';
}
