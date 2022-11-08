import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  Highcharts=Highcharts;
  chartOptions={};
 @Input() data:{name: string,y: number,sliced?: boolean,selected?: boolean}[]=[];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions=  {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Browser market shares in May, 2020'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },exporting:{
        enabled:true
      },
      credits:{
        enabled:false
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: this.data
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
   window.dispatchEvent(new Event('resize'));
  },3000);
  }

}
