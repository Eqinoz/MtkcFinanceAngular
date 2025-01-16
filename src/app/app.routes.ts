import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {CompanyComponent} from './components/company/company.component';
import {PaymentTypeComponent} from './components/payment-type/payment-type.component';
import {HomeComponent} from './components/home/home.component';
import {PaymentListComponent} from './components/payment-list/payment-list.component';
import {CompanyAddComponent} from './components/company-add/company-add.component';
import {PaymentListAddComponent} from './components/payment-list-add/payment-list-add.component';
import {UserAddComponent} from './components/user-add/user-add.component';
import {LoginComponent} from './components/login/login.component';
import {NgModule} from '@angular/core';
import {loginGuard} from './guards/login.guard';
import {roleGuardGuard} from './guards/role-guard.guard';
import {PaymentTypeAddComponent} from './components/payment-type-add/payment-type-add.component';
import {HistorypaymentlistComponent} from './components/historypaymentlist/historypaymentlist.component';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {path:"",  component:HomeComponent, canActivate:[loginGuard]},
  {path:"company", component:CompanyComponent , canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe","Genel Müdür"]}},
  {path:"company/add", component:CompanyAddComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe","Genel Müdür"]}},


  {path:"users", component:UserComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe","Genel Müdür"]}},
  {path:"users/add", component:UserAddComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe","Genel Müdür"]}},

  {path:"paymenttypes", component:PaymentTypeComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe","Genel Müdür"]}},
  {path:"paymenttypes/add", component:PaymentTypeAddComponent},


  {path:"paymentlist", component:PaymentListComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe","Genel Müdür","İdari Personel"]}},
  {path:"paymentlist/add", component:PaymentListAddComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe","Genel Müdür","İdari Personel"]}},

  {path:"historypaymentlist", component:HistorypaymentlistComponent,canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe","Genel Müdür","İdari Personel"]}},

  {path:"login",  component:LoginComponent},
  {path:"**", pathMatch:"full", component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule {}
