import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {Paymentlist} from '../models/paymentlist';
import {ResponseModel} from '../models/ResponseModel';


@Injectable({
  providedIn: 'root'
})
export class PaymentListService {
  apiUrl="https://localhost:44317/api/PaymentList/"

  constructor(private httpClient: HttpClient) { }

  getPaymentList():Observable<ListResponseModel<Paymentlist>> {
    return this.httpClient.get<ListResponseModel<Paymentlist>>(this.apiUrl+"getall");
  }
  add(paymentList:Paymentlist):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",paymentList);
  }
  del(id:number):Observable<ResponseModel>{
    return this.httpClient.delete<ResponseModel>(this.apiUrl+"deleted/?id="+id);
  }
}
