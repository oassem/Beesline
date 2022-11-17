import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from '../../../modules/dashboard.service';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  chartOptions:{}={};
  Highcharts=Highcharts;
data:{name:string,data:number[]}[]=[];
  constructor(private dashboardService:DashboardService) { }
  ngOnInit(): void {
    this.dashboardService.GetAreaChart().subscribe({
        next:(data)=>{
            console.log(data);
            this.data=data;
            console.log(this.data);
            this.chartOptions= {
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'Customer Registered over Years'
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
                        pointStart: 2016
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
                // series:[
                //     {name:'cairo',
                // data:[2,2,1,3,1,4,31]}
                // ]
            };
            
        },
        error: (err) => console.error(err),}
       );

    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Customer Visited over Years'
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
              pointStart: 2016
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
      series:[
        {name:'cairo',
    data:[0,0,0,0,0,0,0]},
    {name:'alex',
    data:[0,0,0,0,0,0,0]},
    {name:'giza',
    data:[0,0,0,0,0,0,0]},
    {name:'portSaid',data:[0,0,0,0,0,0,0]},
    {name:'suez',data:[0,0,0,0,0,0,0]},
    {name:'luxor',data:[0,0,0,0,0,0,0]},
    {name:'mansoura',data:[0,0,0,0,0,0,0]},
    {name:'tanta',data:[0,0,0,0,0,0,0]},
    {name:'asyut',data:[0,0,0,0,0,0,0]},
    {name:'ismailia',data:[0,0,0,0,0,0,0]},
    {name:'faiyum',data:[0,0,0,0,0,0,0]},
    {name:'zagazig',data:[0,0,0,0,0,0,0]},
    {name:'damietta',data:[0,0,0,0,0,0,0]},
    {name:'aswan',data:[0,0,0,0,0,0,0]},
    {name:'minya',data:[0,0,0,0,0,0,0]},
    {name:'damanhur',data:[0,0,0,0,0,0,0]},
    {name:'beniSuef',data:[0,0,0,0,0,0,0]},
    {name:'qena',data:[0,0,0,0,0,0,0]},
    {name:'sohag',data:[0,0,0,0,0,0,0]},
    {name:'banha',data:[0,0,0,0,0,0,0]},
    {name:'arish',data:[0,0,0,0,0,0,0]}
      ]
  };
  console.log(this.data);
  HC_exporting(Highcharts);
  setTimeout(()=>{
   window.dispatchEvent(new Event('resize'));
  },3000);
  
  }

}
