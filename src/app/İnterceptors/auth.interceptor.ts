import {HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {JwtService} from '../services/jwthelper.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';



export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtService = inject(JwtService);
  const router=inject(Router);
  const toastr= inject(ToastrService)
  let token = localStorage.getItem('token');

  if (token) {
    const isValid =jwtService.isTokenValid();
    if (!isValid) {
      jwtService.clearToken();
      toastr.info('Oturum Süreniz Doldu Lütfen Tekrar Giriş Yapınız.',"Uyarı");
      router.navigate(['/login']);
      return next(req);
    }
  }
  let newReq:HttpRequest<any>;
  newReq = req.clone({
    headers:req.headers.set('Authorization', 'Bearer ' + token),
  })
  return next(newReq);
};
