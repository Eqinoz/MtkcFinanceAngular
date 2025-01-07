import { Component } from '@angular/core';
import {NaviComponent} from '../navi/navi.component';
import {PieChartComponent} from '../pie-chart/pie-chart.component';


@Component({
  selector: 'app-home',
  imports: [
    NaviComponent,
    PieChartComponent

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
