import { Routes } from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {CompanyComponent} from './components/company/company.component';
import {PaymentTypeComponent} from './components/payment-type/payment-type.component';
import {HomeComponent} from './components/home/home.component';
import {PaymentListComponent} from './components/payment-list/payment-list.component';
import {CompanyAddComponent} from './components/company-add/company-add.component';
import {PaymentListAddComponent} from './components/payment-list-add/payment-list-add.component';
import {UserAddComponent} from './components/user-add/user-add.component';
import {LoginComponent} from './components/login/login.component';

export const routes: Routes = [
  {path:"",  component:HomeComponent},
  {path:"company", component:CompanyComponent},
  {path:"company/add", component:CompanyAddComponent},
  {path:"company/:id", component:CompanyComponent },
  {path:"users", component:UserComponent},
  {path:"users/add", component:UserAddComponent},
  {path:"paymenttypes", component:PaymentTypeComponent},
  {path:"paymentlist", component:PaymentListComponent},
  {path:"paymentlist/add", component:PaymentListAddComponent},
  {path:"login", component:LoginComponent},
];
