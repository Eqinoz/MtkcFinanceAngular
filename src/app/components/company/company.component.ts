import {Component, OnInit} from '@angular/core';
import {Company} from '../../models/company';
import {CompanyService} from '../../services/company.service';

@Component({
  selector: 'app-company',
    imports: [

    ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  company:Company[]=[];

  constructor(private companyService: CompanyService) {
  }

    ngOnInit(): void {
        this.getCompany();
    }

    getCompany(){
    this.companyService.getCompany().subscribe(data=>{this.company=data.data})
    }

}
