import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe} from "@angular/common";
import {NaviComponent} from "../navi/navi.component";
import {RouterLink} from "@angular/router";
import {HistoryPaymentListService} from '../../services/history-payment-list.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-historypaymentlist',
    imports: [
        CurrencyPipe,
        DatePipe,
        NaviComponent,
        RouterLink
    ],
  templateUrl: './historypaymentlist.component.html',
  styleUrl: './historypaymentlist.component.css'
})
export class HistorypaymentlistComponent implements OnInit {
  historyPaymentList:any[];


  constructor(private historyPaymentListService: HistoryPaymentListService, private toastr: ToastrService) {
  }
    ngOnInit(): void {
        this.getHistoryPaymentList()
    }

    getHistoryPaymentList() {
    this.historyPaymentListService.getHistoryPaymentList().subscribe(data=>
      this.historyPaymentList=data.data
    )
    }

}
