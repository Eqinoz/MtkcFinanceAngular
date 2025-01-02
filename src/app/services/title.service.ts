import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {Title} from '../models/title';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  apiUrl="https://localhost:44317/api/Title/"

  constructor(private http: HttpClient) { }

  getAll():Observable<ListResponseModel<Title>>{
    return this.http.get<ListResponseModel<Title>>(this.apiUrl+"getAll");
  }
  add(title:Title):Observable<ListResponseModel<Title>>{
    return this.http.post<ListResponseModel<Title>>(this.apiUrl+"add", title);
  }
}
