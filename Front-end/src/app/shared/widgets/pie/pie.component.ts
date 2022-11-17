import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from 'src/app/modules/dashboard.service';
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  Highcharts=Highcharts;
  chartOptions:{}={};
data:{name: string,y: number}[]=[];
  constructor(private dashboardService:DashboardService) { }
  ngOnInit(): void {
    this.dashboardService.GetAllCatProducts().subscribe({
      next:(data)=>{
        console.log(data);
        this.data=data;
        console.log(this.data);
        this.chartOptions=  {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Product Categories'
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
          series:[{
            name:'Categories',
            colorByPoint:true,
            data:this.data

          }]};

      },error: (err) => console.error(err),
    });
    this.chartOptions=  {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Product Categories'
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
      series: [
        {
          name:'Categories',
          colorByPoint:true,
          data: [{
            name: 'lip balms',
            y: 0
          }, {
            name: 'face care',
            y: 0
          }, {
            name: 'deodorants',
            y: 0
          }, {
            name: 'sun care',
            y: 0
          }, {
            name: 'express masks',
            y: 0
          }, {
            name: 'face radiance',
            y: 0
          }, {
            name: 'intimate hygiene',
            y: 0
          }, {
            name: 'skin treatments',
            y: 0
          }]
        }
      ]
    
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
   window.dispatchEvent(new Event('resize'));
  },3000);
  }

}
