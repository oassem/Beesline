import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor() { }
  bigChart(){
    return [{
      name: 'Cairo',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Alex',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Matrouh',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Hurghada',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Port',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }
  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];}
    data:any;
    order:any;
   AddProduct(data:any){
    this.data=data;
   }
   getAddedProduct(){
    if(this.data !=undefined){
    return this.data;
    }
   }
   changeStatus(order:any){
    this.order;
   }
   getChangedStatus(){
    if(this.order !=undefined){
      return this.order;
    }
   }
 
   
}
