import {Component, OnInit} from '@angular/core';
import {Paymentlist} from '../../models/paymentlist';
import {PaymentType} from '../../models/paymentType';
import {PaymentTypeService} from '../../services/paymentType.service';

@Component({
  selector: 'app-payment-type',
  imports: [],
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.css'
})
export class PaymentTypeComponent implements OnInit {
  paymentType: PaymentType[]=[];

  constructor(private paymentTypeService:PaymentTypeService) {
  }
    ngOnInit(): void {
        this.getPaymentTypes()
    }
    getPaymentTypes(): void {
      this.paymentTypeService.getPaymentType().subscribe(data => {this.paymentType=data.data})
    }

}
