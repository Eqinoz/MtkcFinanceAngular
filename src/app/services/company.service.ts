import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ListResponseModel} from '../models/listResponseModel';
import {Company} from '../models/company';
import {catchError, Observable} from 'rxjs';
import {ResponseModel} from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl="https://localhost:44317/api/Companys/"

  constructor(private httpClient:HttpClient, ) { }

  getCompany(): Observable<ListResponseModel<Company>> {
    return  this.httpClient.get<ListResponseModel<Company>>(this.apiUrl+"getall");

  }
  deletedCompany(id:number): Observable<ResponseModel> {
    let newUrl = this.apiUrl+"deleted?id="+id;
    // @ts-ignore
    return this.httpClient.post<ResponseModel>(newUrl);
  }

  add(company: Company):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add", company);
  }
}
