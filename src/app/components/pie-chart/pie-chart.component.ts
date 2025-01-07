import {Component, OnInit} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';


@Component({
  selector: 'app-pie-chart',
  imports: [  ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent implements OnInit{
   chartType: string = "pie";
   chartLabel: string[] = [];
   chartData: number[] = [];
  constructor() { }

  ngOnInit() {
    this.chartFilled();
  }



  chartFilled() {

    this.chartLabel.push('Red', 'Blue', 'Yellow', 'Gray', 'Green');

    this.chartData.push(12, 22, 32, 42, 52);

  }

  chartOptions = {

    animation: {
      duration: 1000,
      easing: "easeInOutQuad"
    },

    responsive: true,
    legend: {
      display: true,
      position: "right",
      fullWidth: false,
      reverse: true
    },
  };






}
