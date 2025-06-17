import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyChartComponent } from './components/my-chart/my-chart.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyChartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'my-app';
}
