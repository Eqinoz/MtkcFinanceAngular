import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PaymentListService} from '../../services/payment-list.service';
import {ToastrService} from 'ngx-toastr';
import {NaviComponent} from '../navi/navi.component';

@Component({
  selector: 'app-payment-list-add',
  imports: [
    ReactiveFormsModule,
    NaviComponent
  ],
  templateUrl: './payment-list-add.component.html',
  styleUrl: './payment-list-add.component.css'
})
export class PaymentListAddComponent implements OnInit {
  paymentListForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private paymentListService:PaymentListService,
              private toastrService: ToastrService) {
  }
    ngOnInit(): void {
        this.createPaymentListAddForm();
    }
    createPaymentListAddForm(){
      this.paymentListForm = this.formBuilder.group({
        userName: ['', Validators.required],
        companyName: ['', Validators.required],
        paymentOfPlace: ['', Validators.required],
        paymentType: ['', Validators.required],
        price: ['', Validators.required],
        description: ['', Validators.required]
      })
    }

    add(){
        if (this.paymentListForm.valid){
          let paymentListModel = Object.assign({}, this.paymentListForm.value);
          this.paymentListService.add(paymentListModel).subscribe(data => {
            console.log(data);
            this.toastrService.success("Ödeme Eklendi","Başarılı")
          })
        }
    }

}
