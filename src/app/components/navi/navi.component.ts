import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {JwtService} from '../../services/jwthelper.service';
import {routes} from '../../app.routes';

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
  setSelectPage:string="";
  currentUrl:string;

  constructor(private jwtService: JwtService,private router: Router,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      this.currentUrl=this.router.url;
      this.setCurrentPage(this.currentUrl);
    })
    const token = localStorage.getItem('token');
    if (token) {
      this.userRole = this.jwtService.getUserRole(token);
      this.userName = this.jwtService.getUserName(token);

    }
  }

  getSelectPage(getpage:string){
    if(this.currentUrl==getpage){
      return "nav-link active";
    }
    else{
      return "nav-link";
    }

  }
  setCurrentPage(page:string){
    this.getSelectPage(page);
  }
  logout() {
    localStorage.clear();
  }


}
