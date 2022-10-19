import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() label:string='';
  @Input() total:string='';
  @Input() percentage:string='';
  @Input() data:number[]=[];
  Highcharts=Highcharts;
  chartOptions={};
  constructor() { }

  ngOnInit(): void {
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
  HC_exporting(Highcharts);
  setTimeout(()=>{
   window.dispatchEvent(new Event('resize'));
  },3000);
  }

}
