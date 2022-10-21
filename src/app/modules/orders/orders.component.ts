import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  data:any;
  constructor(private activatedRoute:ActivatedRoute,private dashboardservice:DashboardService) { 
    if(this.activatedRoute.snapshot.params!=undefined){
      this.data=this.activatedRoute.snapshot.params;
        if(this.data != undefined){
            dashboardservice.changeStatus(this.data);
         }
      }
      
  }

  ngOnInit(): void {
  }

}
