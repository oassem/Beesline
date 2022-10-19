import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent  {
  name = 'Orders Control';
  // username,date,totalPrice,Product Titles,orderStatus(pending,accepted,rejected)
  displayedColumns = ['id','username', 'date', 'totalprice', 'producttitles','orderStatus','action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor() {}
}

export interface Element {
 id:number,
 date:string,
 username:string,
 totalprice:number,
 producttitles:string,
 orderStatus:string,
action:''
}

const ELEMENT_DATA: Element[] = [
  {id: 1,date:'15/3/2022', username: 'Hydrogen',totalprice: 1.0079, producttitles: 'H',orderStatus:'pending',action:''},
  {id: 2,date:'20/2/2022',  username: 'Helium', totalprice: 4.0026, producttitles: 'He',orderStatus:'pending',action:''},
  {id: 3,date:'1/2/2022',  username: 'Lithium', totalprice: 6.941, producttitles: 'Li',orderStatus:'pending',action:''},
  {id: 4,date:'15/1/2022',  username: 'Beryllium', totalprice: 9.0122,producttitles: 'Be',orderStatus:'pending',action:''},
  {id: 5,date:'20/5/2022',  username: 'Boron', totalprice: 10.811, producttitles: 'B',orderStatus:'pending',action:''},
  {id: 6,date:'19/7/2022',  username: 'Carbon',totalprice: 12.0107, producttitles: 'C',orderStatus:'pending',action:''},
  {id: 7,date:'30/6/2022',  username: 'Nitrogen', totalprice: 14.0067, producttitles: 'N',orderStatus:'pending',action:''},
  {id: 8,date:'10/3/2022',  username: 'Oxygen',totalprice: 15.9994,producttitles: 'O',orderStatus:'pending',action:''},
  {id: 9,date:'20/1/2022',  username: 'Fluorine',totalprice: 18.9984, producttitles: 'F',orderStatus:'pending',action:''},
  {id: 10,date:'10/30/2022',  username: 'Neon',totalprice: 20.1797,producttitles: 'Ne',orderStatus:'pending',action:''},
  {id: 11,date:'30/3/2022',  username: 'Sodium',totalprice: 22.9897,producttitles: 'Na',orderStatus:'pending',action:''},
  {id: 12,date:'10/2/2022',  username: 'Magnesium',totalprice: 24.305, producttitles: 'Mg',orderStatus:'pending',action:''},
  {id: 13,date:'10/3/2022',  username: 'Aluminum',totalprice: 26.9815, producttitles: 'Al',orderStatus:'pending',action:''},
  {id: 14,date:'23/9/2022',  username: 'Silicon',totalprice: 28.0855,producttitles: 'Si',orderStatus:'pending',action:''},
  {id: 15,date:'20/2/2022',  username: 'Phosphorus',totalprice: 30.9738, producttitles: 'P',orderStatus:'pending',action:''},
  {id: 16,date:'2/8/2022',  username: 'Sulfur',totalprice: 32.065, producttitles: 'S',orderStatus:'pending',action:''},
  {id: 17,date:'2/5/2022', username: 'Chlorine',totalprice: 35.453, producttitles: 'Cl',orderStatus:'pending',action:''},
  {id: 18,date:'20/7/2022',  username: 'Argon',totalprice: 39.948,producttitles: 'Ar',orderStatus:'pending',action:''},
  {id: 19,date:'3/9/2022' , username: 'Potassium',totalprice: 39.0983,producttitles: 'K',orderStatus:'pending',action:''},
  {id: 20,date:'20/4/2022', username: 'Calcium', totalprice: 40.078,producttitles: 'Ca',orderStatus:'pending',action:''},
];
