import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  chartOptions:{}={};
  Highcharts=Highcharts;
  @Input() data:{name:string,data:number[]}[]=[];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Customer Visits over Years'
      },
      subtitle: {
          text: '' 
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'No Of Customer'
          }
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
          series: {
              pointStart: 2012
          },
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      credits:{
         enabled:false
      },
      exporting:{
        enabled:true
      },
      series:this.data
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
   window.dispatchEvent(new Event('resize'));
  },3000);
  }

}
