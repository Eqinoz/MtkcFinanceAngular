import {Component, OnInit} from '@angular/core';
import {NaviComponent} from '../navi/navi.component';
import {DovizService} from '../../services/doviz.service';


@Component({
  selector: 'app-home',
  imports: [
    NaviComponent,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currencies:any;

  constructor(private dovizService: DovizService) {
  }
    ngOnInit(): void {
        this.dovizService.getDoviz().subscribe(data => {
          this.currencies=data;
        })
    }

}
