import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as http from 'node:http';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {HistoryPaymentList} from '../models/HistoryPaymentList';
import {ResponseModel} from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class HistoryPaymentListService {
  apiUrl="https://localhost:44317/api/HistoryPaymentList/"

  constructor(private http: HttpClient) { }

  getHistoryPaymentList():Observable<ListResponseModel<HistoryPaymentList>>{
    return this.http.get<ListResponseModel<HistoryPaymentList>>(this.apiUrl+"Get");
  }
  addHistoryPayment(payload:HistoryPaymentList):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.apiUrl+"add",payload);
  }
}
