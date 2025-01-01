import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {JwtService} from '../services/jwthelper.service';
import {ToastrService} from 'ngx-toastr';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  let jwtHelper= inject(JwtService)
  let router = inject(Router)
  let toastr = inject(ToastrService)
  const token = localStorage.getItem("token");
  if (token) {
    const userRole = jwtHelper.getUserRole(token);
    const allowRoles = route.data['roles'];
    if (allowRoles.includes(userRole)) {
      return true;
    }
  }
  toastr.error("Üstüne Vazife Olmayan İşlere Karışma","Dikkat!!")
  router.navigate(['/']);
  return false;
};
