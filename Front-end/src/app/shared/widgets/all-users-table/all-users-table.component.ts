import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../modules/dashboard.service';


@Component({
  selector: 'app-widget-all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.css']
})
export class AllUsersTableComponent implements OnInit{

  constructor(public dashboardService:DashboardService) { }
AllUserData:any;
  ngOnInit(): void {
    this.dashboardService.GetAllUsers().subscribe(data=>{
      console.log(data.data);
      this.AllUserData=data.data;

    })
    

  }



}
