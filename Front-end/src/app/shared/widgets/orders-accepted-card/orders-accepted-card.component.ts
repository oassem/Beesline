import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from 'src/app/modules/dashboard.service';
@Component({
  selector: 'app-orders-accepted-card',
  templateUrl: './orders-accepted-card.component.html',
  styleUrls: ['./orders-accepted-card.component.css']
})
export class OrdersAcceptedCardComponent implements OnInit {
  @Input() label:string='';
  @Input() total:string='';
  // @Input() percentage:string='';
  // @Input() data:number[]=[];
  data:number[]=[];
  Highcharts=Highcharts;
  chartOptions={};
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.GetAllOrderAccepted().subscribe(data=>{
      this.data=data;
      console.log(this.data);
      this.chartOptions= {
        chart: {
            type: 'area',
            backgroundColor:null,
            borderWidth:0,
            margin:[2,2,2,2],
            height:60,
        },
        title: {
            text: null
        },
        tooltip:{
          split:true,
          outside:true
        },
        legend:{
          enabled:false
        },
        subtitle: {
            text: null 
        },
        credits:{
           enabled:false
        },
        exporting:{
          enabled:false
        },
        xAxis:{
          labels:{
            enabled:true
          },
          title:{
            text:null
          },
          startOnTick:false,
          endOnTick:false,
          tickOptions:[]
        },
        yAxis:{
          labels:{
            enabled:true
          },
          title:{
            text:null
          },
          startOnTick:false,
          endOnTick:false,
          tickOptions:[]
        },
        series: [{
          data:this.data
        }
      ]
    };
    },(e)=>{console.log(e)},
    ()=>{

    });
    this.chartOptions= {
      chart: {
          type: 'area',
          backgroundColor:null,
          borderWidth:0,
          margin:[2,2,2,2],
          height:60,
      },
      title: {
          text: null
      },
      tooltip:{
        split:true,
        outside:true
      },
      legend:{
        enabled:false
      },
      subtitle: {
          text: null 
      },
      credits:{
         enabled:false
      },
      exporting:{
        enabled:false
      },
      xAxis:{
        labels:{
          enabled:true
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      yAxis:{
        labels:{
          enabled:true
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },
      series: [{
        data:[0,0,0,0,0,0,0]
      }
    ]
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
   window.dispatchEvent(new Event('resize'));
  },3000);
  }


}
