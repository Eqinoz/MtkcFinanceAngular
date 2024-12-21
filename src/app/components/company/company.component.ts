import {Component, OnInit} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {HttpClient} from '@angular/common/http';
import {Company} from '../../models/company';
import {CompanyResponseModel} from '../../models/companyResponseModel';

@Component({
  selector: 'app-company',
    imports: [

    ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  company:Company[]=[];
  apiUrl="https://webapi79.azure-api.net/api/Companys/getall"
  constructor(private httpClient:HttpClient) {
  }

    ngOnInit(): void {
        this.getCompany();
    }

    getCompany(){
    this.httpClient.get<CompanyResponseModel>(this.apiUrl)
      .subscribe((response)=>{this.company=response.data})
    }

}
