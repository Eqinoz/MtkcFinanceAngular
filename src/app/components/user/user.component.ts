import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserResponseModel} from '../../models/userResponseModel';
import {response} from 'express';
import {User} from '../../models/user';


@Component({
  selector: 'app-user',
  imports: [

  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users:User[]=[]
  apiUrl="https://webapi79.azure-api.net/api/Users/getdetails"


  constructor(private httpClient:HttpClient) {
  }
    ngOnInit(): void {
      this.getUsers();
    }

    getUsers(){
        this.httpClient.get<UserResponseModel>(this.apiUrl)
          .subscribe((response)=>{this.users = response.data;});
    }

}
