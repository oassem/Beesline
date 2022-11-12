import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prdoucts-table',
  templateUrl: './prdoucts-table.component.html',
  styleUrls: ['./prdoucts-table.component.css']
})
export class PrdouctsTableComponent implements OnInit{
  AllProducts:any;
 constructor(private activatedRoute:ActivatedRoute,public dashboardService:DashboardService,private router:Router){}
 searchTerm:string|number| any;// search keyword 
 ngOnInit() {
    this.dashboardService.GetAllProducts().subscribe(data=>{
      console.log(data.data);
      this.AllProducts=data.data;
    },
    (e)=>{console.log(e)},
    ()=>{
    })
}
makeOffer(){
  
}

deleteProduct(id:any){
  this.dashboardService.deleteOneProduct(id).subscribe(data=>{
    this.ngOnInit();
   },
   (e)=>{console.log(e)},
   ()=>{
    window.location.reload();
   
   })

}
}
