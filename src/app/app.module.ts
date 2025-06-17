import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { MyChartComponent } from './components/my-chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent 
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
