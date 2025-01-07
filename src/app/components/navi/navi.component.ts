import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {JwtService} from '../../services/jwthelper.service';

@Component({
  selector: 'app-navi',
  imports: [
    RouterLink
  ],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent implements OnInit {

  userRole: any;
  userName: any;
  setSelectPage:string;

  constructor(private jwtService: JwtService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.userRole = this.jwtService.getUserRole(token);
      this.userName = this.jwtService.getUserName(token);

    }
  }

  getSelectPage(page:string){
    this.setSelectPage=page;
  }
  setCurrentPage(page:string){
    if (page==this.setSelectPage){
      return "nav-bar active";
    }
    else{
      return "nav-bar";
    }
  }
  logout() {
    localStorage.clear();
  }


}
