import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatCardModule } from '@angular/material/card';
// import SolidGauge from 'highcharts/modules/solid-gauge';
// import More from 'highcharts/highcharts-more';

import { CARD_DATA, CardInfo, lineChartOptions,
  barChartOptions,
  donutChart1,
  donutChart2, } from '../../../app/utils/card-data';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-my-chart',
  standalone: true,
  imports: [HighchartsChartModule, MatCardModule,CommonModule],
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})

export class MyChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions = lineChartOptions;


  barChartOptions = barChartOptions;

  donutChart1 = donutChart1;
  donutChart2 = donutChart2;

  cards: CardInfo[] = CARD_DATA; // ✅ Use defined card data
}
