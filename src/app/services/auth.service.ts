import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {LoginModel} from '../models/loginModel';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {ResponseModel} from '../models/ResponseModel';
import {TokenModel} from '../models/TokenModel';
import {SingleResponseModel} from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:44317/api/Auth/";
  redirectUrl:string

  constructor(private httpClient: HttpClient) { }

  login(login:LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return  this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login", login);
  }
  register(user: User):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"register", user);

  }
  isAuthenticated(){
    const token = localStorage.getItem("token");
    return token ? true : false;
  }
}
