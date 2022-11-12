import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';
@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {
  ProductData:any={}
  id = this._route.snapshot.params['id'];
    constructor(public dashboardService:DashboardService,private router:Router,private _route:ActivatedRoute) { }
    ngOnInit(): void {
      console.log(this.id);
      this.dashboardService.ShowOneProduct(this.id).subscribe(data=>{
        console.log(data.data);
        this.ProductData=data.data;
      },(e)=>{console.log(e)},
      ()=>{}); 
    }
}
