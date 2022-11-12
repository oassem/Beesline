import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  data:any;
 constructor(public dashboardService:DashboardService,private router:Router) { 

 }

  
  ngOnInit(): void {
   
      this.dashboardService.ShowOneUser(1).subscribe(data=>{
        console.log(data.data);
        this.data=data.data;
      },(e)=>{console.log(e)},
      ()=>{
      })
  }
}
