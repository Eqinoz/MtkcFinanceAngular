import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListResponseModel} from '../models/listResponseModel';
import {Company} from '../models/company';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl="https://webapi79.azure-api.net/api/Companys/getall"

  constructor(private httpClient:HttpClient) { }

  getCompany(): Observable<ListResponseModel<Company>> {
    return  this.httpClient.get<ListResponseModel<Company>>(this.apiUrl);

  }
}
