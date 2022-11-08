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
 
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private dashboardService:DashboardService) {}
  ngOnInit():void{
    this.dashboardService.GetAllOrders().subscribe(data=>{
      console.log(data.data);
      this.AllOrders=data.data;
    })
   
  }
}
 