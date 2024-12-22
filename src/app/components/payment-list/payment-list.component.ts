import {Component, OnInit} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import * as XLSX from "xlsx";
import {Paymentlist} from '../../models/paymentlist';
import {PaymentListService} from '../../services/payment-list.service';
import {response} from 'express';


@Component({
  selector: 'app-payment-list',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export class PaymentListComponent implements OnInit {
  paymentLists: Paymentlist[] = []

  constructor(private paymentListService:PaymentListService) {
  }
  exportToExcel(){
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.paymentLists);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook,worksheet,"Sheet1");

    XLSX.writeFile(workbook,"ödeme.xlsx");
  }

    ngOnInit(): void {
        this.getPaymentList();
    }
    getPaymentList(){
    this.paymentListService.getPaymentList()
      .subscribe(response =>{this.paymentLists=response.data});
}

}
