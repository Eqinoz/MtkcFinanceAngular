import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';
import * as XLSX from "xlsx";
import {Paymentlist} from '../../models/paymentlist';
import {PaymentListService} from '../../services/payment-list.service';
import {response} from 'express';
import {RouterLink} from '@angular/router';
import {ExcelPaymentList} from '../../models/excel-payment-list';
import {NaviComponent} from '../navi/navi.component';
import {Company} from '../../models/company';
import {HistoryPaymentList} from '../../models/HistoryPaymentList';
import {HistoryPaymentListService} from '../../services/history-payment-list.service';
import {ToastrService} from 'ngx-toastr';
import {JwtService} from '../../services/jwthelper.service';
import {iterator} from 'rxjs/internal/symbol/iterator';



@Component({
  selector: 'app-payment-list',
  imports: [
    CurrencyPipe,
    RouterLink,
    NaviComponent,
    DatePipe,

  ],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export class PaymentListComponent implements OnInit {
  paymentLists: Paymentlist[] = []
  filterPaymentList: any[] = []
  excelPaymentList: ExcelPaymentList[] = []
  paymentList: Paymentlist[] = []
  currentPaymentList: Paymentlist| null = null;
  responseModel: string;
  userRole: string;

  constructor(private paymentListService:PaymentListService,private historyPayment: HistoryPaymentListService,
              private toastr: ToastrService, private jwtService: JwtService) {
  }
  exportToExcel(){
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.paymentLists);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook,worksheet,"Sheet1");

    XLSX.writeFile(workbook,"ödeme.xlsx");
  }

    ngOnInit(): void {
        this.getPaymentList();
      const token = localStorage.getItem('token');
      if (token) {
        this.userRole = this.jwtService.getUserRole(token);}
    }
    getPaymentList(){
    this.paymentListService.getPaymentList()
      .subscribe(response =>{
        if (this.userRole == 'Admin' || this.userRole == 'Ceo' || this.userRole == 'Muhasebe' || this.userRole == 'Genel Müdür'){
          this.paymentLists=response.data;
        }
        else if(this.userRole == 'İşletme Müdürü'){
          this.paymentLists=response.data.filter(item => item.title=="İşletme Müdürü" || item.title=="İdari Personel");
        }
        else if(this.userRole == 'İdari Personel'){
          this.paymentLists=response.data.filter(item => item.title=="İdari Personel");
        }
      });
}
  setCurrentPayment(paymentList:Paymentlist): void {
    this.currentPaymentList = paymentList;
  }

  getSelectPayment(paymentList: Paymentlist): string {
    return paymentList === this.currentPaymentList ? 'table-dark' : '';
  }



  addHistoryPayment(payment:Paymentlist) {
    const updatedHistory: HistoryPaymentList = {
      id: payment.id, // Eğer bir id gerekliyse
      userName: payment.userName,
      title: payment.title,
      dateAdded: payment.dateAdded,
      companyName: payment.companyName,
      paymentOfPlace: payment.paymentOfPlace,
      paymentType: payment.paymentType,
      price: payment.price,
      description: payment.description,
      datePaid: new Date(Date.now()), // Tarihi Date türünde atıyoruz
    };

    this.historyPayment.addHistoryPayment(updatedHistory).subscribe({
      next: (response) => {
        console.log(response);
        this.toastr.success("Ödeme Başarılı", "Much");
      },
      error: (err) => {
        console.error(err);
        this.toastr.error("Ödeme Başarısız", "Hata");
      },
    });

  }
  deletePayment(id: number): void {

    this.paymentListService.del(id).subscribe((data) => {
      this.responseModel = data.message;
      this.paymentLists = this.paymentLists.filter((item) => item.id !== id); // Silinen Ödemeyi listeden kaldırır
      this.toastr.success("Ödeme Silindi")
    });
  }
}
