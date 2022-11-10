import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {  ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/modules/dashboard.service';
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit  {
  AllOrders:any;
  AllOrdersNotRepeated:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,public dashboardService:DashboardService) {}
  ngOnInit():void{
    this.dashboardService.GetAllOrders().subscribe(data=>{
      console.log(data.data);
      this.AllOrders=data.data;
    })
    this.dashboardService.GetAllNotRepeatedOrder().subscribe(data=>{
      console.log(data.data);
      this.AllOrdersNotRepeated=data.data;
    })
  }
}
 