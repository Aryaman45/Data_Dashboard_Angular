import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/linechart/line-chart.component';
import { BarChartComponent } from './charts/barchart/bar-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent, 
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
