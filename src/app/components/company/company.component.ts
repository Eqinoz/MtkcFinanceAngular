import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NaviComponent} from '../navi/navi.component';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  imports: [
    RouterLink,
    NaviComponent,

  ],
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company[] = [];
  currentCompany: Company | null = null; // Başlangıçta null
  responseModels: string;

  constructor(
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(): void {
    this.companyService.getCompany().subscribe((data) => {
      this.company = data.data;
    });
  }

  deleteCompany(id: number,name:string): void {
    console.log(id);
    console.log("Çalıştı");

    this.companyService.deletedCompany(id).subscribe((data) => {
      this.responseModels = data.message;
      this.company = this.company.filter((item) => item.id !== id); // Silinen şirketi listeden kaldırır
      this.toastr.error(this.responseModels,"Silindi!");
    });
  }
n
  setCurrentCompany(company: Company): void {
    this.currentCompany = company;
  }

  getSelectCompany(company: Company): string {
    return company === this.currentCompany ? 'table-dark' : '';
  }
}
