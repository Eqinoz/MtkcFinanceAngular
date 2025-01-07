import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {PaymentType} from '../models/paymentType';
import {ResponseModel} from '../models/ResponseModel';


@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  apiUrl="https://localhost:44317/api/PaymentType/"

  constructor(private httpClient: HttpClient) { }

  getPaymentType():Observable<ListResponseModel<PaymentType>> {
    return this.httpClient.get<ListResponseModel<PaymentType>>(this.apiUrl+"getall");
  }
  addPaymentType(paymentType:PaymentType):Observable<ListResponseModel<PaymentType>>{
    return this.httpClient.post<ListResponseModel<PaymentType>>(this.apiUrl+"add",paymentType);
  }
  delPaymentType(id:number):Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl+"deleted?id="+id);
  }
}
