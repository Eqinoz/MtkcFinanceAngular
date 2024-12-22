import { Routes } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {CompanyComponent} from './components/company/company.component';
import {PaymentTypeComponent} from './components/payment-type/payment-type.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {path:"",  component:HomeComponent},
  {path:"company", component:CompanyComponent},
  {path:"users", component:UserComponent},
  {path:"paymenttypes", component:PaymentTypeComponent},
];
