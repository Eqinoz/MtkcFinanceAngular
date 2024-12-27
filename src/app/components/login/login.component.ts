import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';

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
              private toastr: ToastrService,) {
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
          console.log()
          this.toastr.success('Giriş Başarılı!',"Başarılı")
          localStorage.setItem("token",response.data.token);
        },
        error:(error) => {
          this.toastr.error(error.error.message,"Başarısız")

        }
      })
    }
  }

}