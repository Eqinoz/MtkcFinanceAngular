import {Component, OnInit} from '@angular/core';
import {NaviComponent} from '../navi/navi.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {PaymentTypeService} from '../../services/paymentType.service';

@Component({
  selector: 'app-payment-type-add',
  imports: [
    NaviComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './payment-type-add.component.html',
  styleUrl: './payment-type-add.component.css'
})
export class PaymentTypeAddComponent implements OnInit {
  paymentTypeAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
              private paymentTypeService: PaymentTypeService) {
  }
    ngOnInit(): void {
    this.createPaymentTypeForm()

    }
    createPaymentTypeForm(){
    this.paymentTypeAddForm = this.formBuilder.group({
      payment_Type: ['',Validators.required],
    })
    }
    add(){
      if(this.paymentTypeAddForm.valid){
        let paymentTypeModel = Object.assign({}, this.paymentTypeAddForm.value);
        this.paymentTypeService.addPaymentType(paymentTypeModel).subscribe({
          complete: () => {
            this.toastr.success("Ödeme Tipi Eklendi","Başarılı");
          },
          error: err => {
            console.log(err);
            if (err.error.Error.length>0){
              for (let i=0; i<err.error.Error.length; i++) {
                this.toastr.error(err.error.Error[i].ErrorMessage,"Doğrulama Hatası");
              }
            }
          },
        })
      }
    }

}
