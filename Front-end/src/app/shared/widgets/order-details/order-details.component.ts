import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
 orderData:any;
 id = this._route.snapshot.params['id'];
  constructor(private _route:ActivatedRoute,private router:Router,public dashboardService:DashboardService) {}

  ngOnInit(): void {
    console.log(this.id);
    this.dashboardService.ShowOneOrder(this.id).subscribe(data=>{

      this.orderData=data.data;
     
    },(e)=>{console.log(e)},
    ()=>{});
  }
}
