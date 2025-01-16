import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PaymentListService} from '../../services/payment-list.service';
import {ToastrService} from 'ngx-toastr';
import {NaviComponent} from '../navi/navi.component';
import {JwtService} from '../../services/jwthelper.service';
import {PaymentTypeService} from '../../services/paymentType.service';
import {CompanyService} from '../../services/company.service';

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
  userName: string;
  title:string;
  paymentType: any[];
  companies: any[];


  constructor(private formBuilder: FormBuilder, private paymentListService:PaymentListService,
              private toastrService: ToastrService, private jwtService: JwtService,
              private paymentTypeService:PaymentTypeService, private companyService: CompanyService) {
  }

    ngOnInit(): void {
    this.getCompany();
        this.getUserName();
        this.getTitle()
        this.getPaymentType();
        this.createPaymentListAddForm();

    }
    createPaymentListAddForm(){
      this.paymentListForm = this.formBuilder.group({
        userName: [this.userName, Validators.required],
        title: [this.title, Validators.required],
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
            this.toastrService.success("Ödeme Eklendi","Başarılı")
            this.paymentListForm.reset({userName:this.userName});
          })
        }
    }

    getUserName(){
    this.userName=this.jwtService.getUserName(localStorage.getItem("token"));
    }

    getTitle(){
    this.title=this.jwtService.getUserRole(localStorage.getItem("token"));
    }

    getPaymentType(){
    this.paymentTypeService.getPaymentType().subscribe(data => {
      this.paymentType=data.data
    })
    }

    getCompany(){
    this.companyService.getCompany().subscribe(data => {
      this.companies=data.data})
    }

}
