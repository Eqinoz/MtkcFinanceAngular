import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../services/auth.service';
import {NaviComponent} from "../navi/navi.component";
import {CompanyService} from '../../services/company.service';
import {TitleService} from '../../services/title.service';


@Component({
  selector: 'app-user-add',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NaviComponent,
  ],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent implements OnInit {
  userAddForm: FormGroup;
  pswShow: boolean = false;
  pswClass: string = "bi bi-eye-slash";
  companyies:any[];
  titles:any[];



  constructor(private formBuilder: FormBuilder, private registerService: AuthService,
              private toastrService: ToastrService, private companyService: CompanyService,
              private titleService: TitleService, ) {
  }

  ngOnInit(): void {
    this.createAddUserForm()
    this.getCompany()
    this.getTitle()
  }

  createAddUserForm() {
    this.userAddForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      titleName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
    })
  }

  add() {
    if (this.userAddForm.valid) {
      let companyModel = Object.assign({}, this.userAddForm.value);
      this.registerService.register(companyModel).subscribe({
        complete: () => {
          this.toastrService.success('Kullanıcı Eklendi');
        },
        error: err => {
          console.log(err.error);
          if (err.error) {
              this.toastrService.error(err.error[2], "Doğrulama Hatası");

          }
        },
      });

    } else {
      this.toastrService.error('Formunuz Eksik', "Dikkat!");
    }

  }

  pswCurrentHiden(index: boolean) {
    if (this.pswShow !== index) {
      this.pswHidden();
      this.pswShow = true;
    } else {
      this.pswHidden()
      this.pswShow = false;
    }

  }

  pswHidden() {
    if (this.pswShow == true) {
      this.pswClass = "bi bi-eye-slash"
      console.log(this.pswClass)

    } else if (this.pswShow == false) {
      this.pswClass = "bi bi-eye"
      console.log(this.pswClass);

    }

  }

  getCompany() {
  this.companyService.getCompany().subscribe(response => {
    this.companyies=response.data
  })
  }

  getTitle() {
    this.titleService.getAll().subscribe(response => {
      this.titles = response.data;
    })
  }

}
