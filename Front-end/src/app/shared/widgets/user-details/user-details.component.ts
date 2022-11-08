import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
userData:any;
ordersData:any;
id = this._route.snapshot.params['id'];
  constructor(public _route:ActivatedRoute,private router:Router,public dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.ShowOneUser(this.id).subscribe(data=>{
      console.log(data.data);
      this.userData=data.data;
    },(e)=>{console.log(e)},
    ()=>{
      
    });
    this.dashboardService.GetAllOrders().subscribe(data=>{
      console.log(data.data);
      this.ordersData=data.data;
    })
  }

}
