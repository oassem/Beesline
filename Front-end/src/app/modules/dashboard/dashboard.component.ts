import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
NoOfUserstotal=0;
NoOfOrdersAccepted=0;
NoOfOrdersRejected=0;
NoOfOrdersPending=0;
  constructor(private dashboardService:DashboardService) {}
  ngOnInit(): void {
    this.dashboardService.GetNoOfUsers().subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        this.NoOfUserstotal =this.NoOfUserstotal + data[index];  
      }
      console.log(this.NoOfUserstotal );
    },(e)=>{console.log(e)},
    ()=>{

    });
    this.dashboardService.GetAllOrderAccepted().subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        this.NoOfOrdersAccepted =this.NoOfOrdersAccepted + data[index];  
      }
      console.log(this.NoOfOrdersAccepted);
    },(e)=>{console.log(e)},
    ()=>{

    });
    this.dashboardService.GetAllOrderRejected().subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        this.NoOfOrdersRejected =this.NoOfOrdersRejected + data[index];  
      }
      console.log(this.NoOfOrdersRejected);
    },(e)=>{console.log(e)},
    ()=>{

    });
    this.dashboardService.GetAllOrderPending().subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        this.NoOfOrdersPending =this.NoOfOrdersPending + data[index];  
      }
      console.log(this.NoOfOrdersPending);
    },(e)=>{console.log(e)},
    ()=>{

    });
  }
  
  }
