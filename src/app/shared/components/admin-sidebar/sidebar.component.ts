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
  id:number=0;
name:string='';
email:string='';
image:string='';
password:string='';
  constructor(private dashboardService:DashboardService,private router:Router) { }

  
  ngOnInit(): void {
   this.data= this.dashboardService.getProfile();
   this.id=this.data['id'];
   this.name=this.data['name'];
   this.email=this.data['email'];
   this.image=this.data['image'];
   this.password=this.data['password'];
  }

}
