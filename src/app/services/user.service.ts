import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {ListResponseModel} from '../models/listResponseModel';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44317/api/Users/';

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<ListResponseModel<User>>{
    return  this.httpClient.get<ListResponseModel<User>>(this.apiUrl+"getdetails");
  }
}
