import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {routes} from '../../app.routes';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService: AuthService,
              private toastr: ToastrService, private router: Router,
              ) {
  }

    ngOnInit(): void {
        this.createLoginForm()
    }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }
  login(){
    if(this.loginForm.valid){

       let loginModel = Object.assign({}, this.loginForm.value)

      this.authService.login(loginModel).subscribe({
        next:(response) =>{
          this.toastr.success('Giriş Başarılı!',"Başarılı")
          localStorage.setItem("token",response.data.token);
          let url = this.authService.redirectUrl
          if (url){
            this.router.navigate([url])
          }
          else{
            this.router.navigate([''])
          }
        },
        error:(error) => {
          this.toastr.error(error.error.message,"Başarısız")

        }
      })
    }
  }

}
