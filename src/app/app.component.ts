import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NaviComponent} from './components/navi/navi.component';
import {PaymentListComponent} from './components/payment-list/payment-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NaviComponent, PaymentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MtkcFinanceAngular';

}
