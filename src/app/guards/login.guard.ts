import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {inject} from '@angular/core';



export const loginGuard: CanActivateFn = (route, state) => {
 const authService = inject(AuthService);
  const toastrService = inject(ToastrService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  else {
    authService.redirectUrl=state.url;
    router.navigate(['login']);
    toastrService.info("Sisteme Giriş Yapmalısınız")
    return false;
  }

};
