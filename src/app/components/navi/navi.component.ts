import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navi',
  imports: [
    RouterLink
  ],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {

  setSelectPage:string;

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
}
