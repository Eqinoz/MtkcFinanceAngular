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

export const routes: Routes = [
  {path:"",  component:HomeComponent, canActivate:[loginGuard]},
  {path:"company", component:CompanyComponent , canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe"]}},
  {path:"company/add", component:CompanyAddComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe"]}},
  {path:"company/:id", component:CompanyComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe"]} },

  {path:"users", component:UserComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe"]}},
  {path:"users/add", component:UserAddComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe"]}},

  {path:"paymenttypes", component:PaymentTypeComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin"]}},
  {path:"paymentlist", component:PaymentListComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe"]}},

  {path:"paymentlist/add", component:PaymentListAddComponent, canActivate:[loginGuard, roleGuardGuard], data:{roles:["Admin","Muhasebe"]}},

  {path:"login",  component:LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule {}
