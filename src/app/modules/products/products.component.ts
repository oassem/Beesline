import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  data:any;
  constructor(private activatedRoute:ActivatedRoute,private dashboardservice:DashboardService) {
    if(this.activatedRoute.snapshot.params!=undefined){
    this.data=this.activatedRoute.snapshot.params;
      if(this.data != undefined){
          dashboardservice.AddProduct(this.data);
       }
    }
    

   }
   ngOnInit(): void {}

}