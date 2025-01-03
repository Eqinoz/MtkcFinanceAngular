import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {PaymentType} from '../models/paymentType';


@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  apiUrl="https://localhost:44317/api/PaymentType/"

  constructor(private httpClient: HttpClient) { }

  getPaymentType():Observable<ListResponseModel<PaymentType>> {
    return this.httpClient.get<ListResponseModel<PaymentType>>(this.apiUrl+"getall");
  }
}
