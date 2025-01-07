import {Component, OnInit} from '@angular/core';
import {PaymentType} from '../../models/paymentType';
import {PaymentTypeService} from '../../services/paymentType.service';
import {NaviComponent} from '../navi/navi.component';
import {RouterLink} from "@angular/router";
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-payment-type',
    imports: [
        NaviComponent,
        RouterLink

    ],
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.css'
})
export class PaymentTypeComponent implements OnInit {
  paymentType: PaymentType[]=[];
  message:string=''
   currentPaymnetTpe: PaymentType|null = null;

  constructor(private paymentTypeService:PaymentTypeService,private toastr:ToastrService) {
  }
    ngOnInit(): void {
        this.getPaymentTypes()
    }
    getPaymentTypes(): void {
      this.paymentTypeService.getPaymentType().subscribe(data => {this.paymentType=data.data})
    }

    deletePaymentType(id: number): void {
      this.paymentTypeService.delPaymentType(id).subscribe(data => {
        this.message=data.message;
        this.paymentType=this.paymentType.filter(item => item.id !== id);
        this.toastr.success("Deleting the Payment Type");
      })
    }
  setCurrentPaymentType(payment: PaymentType): void {
    this.currentPaymnetTpe = payment;
  }

  getSelectType(payment: PaymentType): string {
    return payment === this.currentPaymnetTpe ? 'table-dark' : '';
  }


}
