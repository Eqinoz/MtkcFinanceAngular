import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NaviComponent} from './components/navi/navi.component';
import {PaymentListComponent} from './components/payment-list/payment-list.component';
import {CompanyComponent} from './components/company/company.component';
import {UserComponent} from './components/user/user.component';
import {PaymentTypeComponent} from './components/payment-type/payment-type.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NaviComponent, PaymentListComponent, CompanyComponent, UserComponent, PaymentTypeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MtkcFinanceAngular';

}
