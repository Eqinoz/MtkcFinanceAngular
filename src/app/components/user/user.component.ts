import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-user',
  imports: [
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users:User[]=[]
  currentUsers:User;
  dataLoading:boolean=false;


  constructor(private userService:UserService) {
  }
    ngOnInit(): void {
      this.getUsers()
    }

    getUsers() {
        this.userService.getUsers().subscribe(response=> {this.users=response.data})
      this.dataLoading=true;
    }
    setCurrentUser(user:User){
    this.currentUsers=user;
      //console.log(user.firstName);
    }
    getSelectUsers(user:User){
        if (user==this.currentUsers){
          return "table-dark"
        }
        else{
          return ""
        }
    }
}
