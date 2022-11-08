import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';
/**
 * @title Product Details
 */
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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
