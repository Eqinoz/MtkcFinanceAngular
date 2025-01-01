import {Component, OnInit} from '@angular/core';
import {PaymentType} from '../../models/paymentType';
import {PaymentTypeService} from '../../services/paymentType.service';
import {NaviComponent} from '../navi/navi.component';


@Component({
  selector: 'app-payment-type',
  imports: [
    NaviComponent

  ],
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
