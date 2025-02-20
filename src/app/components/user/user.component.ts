import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {RouterLink} from '@angular/router';
import {NaviComponent} from '../navi/navi.component';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-user',
  imports: [
    RouterLink,
    NaviComponent,

  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users:User[]=[]
  currentUsers:User;
  dataLoading:boolean=false;
  responseModel:string;


  constructor(private userService:UserService, private toastrService:ToastrService) {
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
    deleteUser(user:User){
    if (user.companyName=="Admin" || user.title=="Admin"){
      this.toastrService.error("Admin Silinemez!","Dikkat")
    }
    this.userService.delUsers(user.id).subscribe(response=> {
      this.responseModel=response.message;
      //this.users= this.users.filter(user=>user.id !== user.id)
      window.location.reload();
      this.toastrService.success('User deleted successfully.',user.firstName+' '+user.lastName);



    })
    }

}
