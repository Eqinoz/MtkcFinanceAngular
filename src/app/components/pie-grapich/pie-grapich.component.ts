import {Component, OnInit} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-pie-grapich',
  imports: [BaseChartDirective],
  templateUrl: './pie-grapich.component.html',
  styleUrl: './pie-grapich.component.css'
})
export class PieGrapichComponent implements OnInit {

  public pieChartOptions: any = {
    responsive: true,
  };

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }


}
