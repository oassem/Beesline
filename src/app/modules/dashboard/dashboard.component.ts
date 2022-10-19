import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
bigChart:{name:string,data:number[]}[]=[];
cards:number[]=[];
piechart:{name:string,y:number,sliced?: boolean,selected?: boolean}[]=[];

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.bigChart=this.dashboardService.bigChart();
    this.cards=this.dashboardService.cards();
    this.piechart=this.dashboardService.pieChart();
  }

}
