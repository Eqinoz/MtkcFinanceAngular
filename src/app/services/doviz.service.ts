import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DovizService {
  apiUrl: string="https://cors-anywhere.herokuapp.com/https://finans.truncgil.com/v4/today.json"

  constructor(private http: HttpClient) { }

  getDoviz():Observable<any>{
    return this.http.get<any>(this.apiUrl)

  }
}
