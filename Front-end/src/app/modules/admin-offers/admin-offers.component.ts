import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-admin-offers',
  templateUrl: './admin-offers.component.html',
  styleUrls: ['./admin-offers.component.css']
})
export class AdminOffersComponent implements OnInit {

  constructor(public dashboardService:DashboardService,private router:Router) { 
   
  }
Alloffers:any;
  ngOnInit(): void {
    this.dashboardService.GetAllOffers().subscribe(data=>{
      console.log(data.data);
      this.Alloffers=data.data;
    },(e)=>{console.log(e)},
    ()=>{

    })
  }
  deleteOffer(id:any){
   this.dashboardService.deleteOneOffer(id).subscribe(data=>{
    console.log(data.data);
   },(e)=>{console.log(e)},
   ()=>{
    window.location.reload();
   })
  }

}
