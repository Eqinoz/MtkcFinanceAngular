import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CurrencyPipe, DatePipe, JsonPipe} from "@angular/common";
import {NaviComponent} from "../navi/navi.component";
import {RouterLink} from "@angular/router";
import {HistoryPaymentListService} from '../../services/history-payment-list.service';
import {ToastrService} from 'ngx-toastr';
import {filter} from 'rxjs';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel} from '@angular/material/form-field';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {response} from 'express';
import {JwtService} from '../../services/jwthelper.service';

@Component({
  selector: 'app-historypaymentlist',
  imports: [
    CurrencyPipe,
    DatePipe,
    NaviComponent,
    RouterLink,
    FormsModule,
    MatError,
    MatLabel,
    MatFormField,
    MatFormFieldModule,
    MatDateRangeInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatDateRangePicker,
    ReactiveFormsModule
  ],
  providers:[provideNativeDateAdapter()],
  templateUrl: './historypaymentlist.component.html',
  styleUrl: './historypaymentlist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistorypaymentlistComponent implements OnInit {
  historyPaymentList:any[];
  filteredHistoryPaymentList:any[];
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  userRole: string;

  constructor(private historyPaymentListService: HistoryPaymentListService, private toastr: ToastrService,
              private jwtService: JwtService,) {
  }
    ngOnInit(): void {
      const token = localStorage.getItem('token');
      if (token) {
        this.userRole = this.jwtService.getUserRole(token);}

        this.getHistoryPaymentList()
      this.range.valueChanges.subscribe(value => {
        this.filterByDateRange();
      })

    }

    getHistoryPaymentList() {
    this.historyPaymentListService.getHistoryPaymentList().subscribe(response=>{
      this.historyPaymentList=response.data;
      this.filteredHistoryPaymentList=this.historyPaymentList;
        if (this.userRole == 'Admin' || this.userRole == 'Ceo' || this.userRole == 'Muhasebe' || this.userRole == 'Genel Müdür'){
          this.historyPaymentList=response.data;
          this.filteredHistoryPaymentList=this.historyPaymentList;
        }
        else if(this.userRole == 'İşletme Müdürü'){
          this.historyPaymentList=response.data.filter(item => item.title=="İşletme Müdürü" || item.title=="İdari Personel");
          this.filteredHistoryPaymentList=this.historyPaymentList;
        }
        else if(this.userRole == 'İdari Personel'){
          this.historyPaymentList=response.data.filter(item => item.title=="İdari Personel");
          this.filteredHistoryPaymentList=this.historyPaymentList;
        }
    }
    )
    }

  filterByDateRange() {
    const startDate = this.range.get('start')?.value;
    const endDate = this.range.get('end')?.value;

    if (startDate && endDate) {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();

      this.filteredHistoryPaymentList = this.historyPaymentList.filter(item => {
        const itemDate = new Date(item.datePaid).getTime();
        return itemDate >= start && itemDate <= end;
      });
    } else {
      this.filteredHistoryPaymentList = [...this.historyPaymentList]; // Tarih aralığı seçilmemişse tüm listeyi göster
    }
  }



}
