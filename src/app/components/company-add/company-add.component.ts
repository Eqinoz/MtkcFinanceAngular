import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {CompanyService} from '../../services/company.service';
import {ToastrService} from 'ngx-toastr';
import {NaviComponent} from '../navi/navi.component';

@Component({
  selector: 'app-company-add',
  imports: [
    ReactiveFormsModule,
    NaviComponent
  ],
  templateUrl: './company-add.component.html',
  styleUrl: './company-add.component.css'
})
export class CompanyAddComponent implements OnInit {
  companyAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private companyService:CompanyService, private toastrService: ToastrService) {
  }
    ngOnInit(): void {
        this.createCompanyAddForm();
    }

    createCompanyAddForm() {
        this.companyAddForm = this.formBuilder.group({
          companyName: ['', Validators.required],
          taxNumber: ['', Validators.required],
        })
    }

  add() {
     if (this.companyAddForm.valid) {
       let companyModel = Object.assign({}, this.companyAddForm.value);
       this.companyService.add(companyModel).subscribe({
         complete: () => { this.toastrService.success('Şirket Eklendi');},
         error: err => {
           console.log(err);
            if (err.error.Error.length>0){
              for (let i=0; i<err.error.Error.length; i++) {
                this.toastrService.error(err.error.Error[i].ErrorMessage,"Doğrulama Hatası");
              }
            }
         },
       });

     }
     else {
       this.toastrService.error('Formunuz Eksik',"Dikkat!");
     }
  }
}
