import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages:any;
  constructor(public dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.GetAllContacts().subscribe(data=>{
      console.log(data.data);
      this.messages=data.data;
    },(e)=>{console.log(e)},
    ()=>{

    })
  }

}
