import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {Paymentlist} from '../models/paymentlist';


@Injectable({
  providedIn: 'root'
})
export class PaymentListService {
  apiUrl="https://webapi79.azure-api.net/api/PaymentList/getall"

  constructor(private httpClient: HttpClient) { }

  getPaymentList():Observable<ListResponseModel<Paymentlist>> {
    return this.httpClient.get<ListResponseModel<Paymentlist>>(this.apiUrl);
  }
}
