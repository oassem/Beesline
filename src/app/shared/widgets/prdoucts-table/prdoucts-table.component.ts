import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-prdoucts-table',
  templateUrl: './prdoucts-table.component.html',
  styleUrls: ['./prdoucts-table.component.css']
})
export class PrdouctsTableComponent{
  
  name = 'Products Control';
  displayedColumns = ['id','image', 'name', 'price', 'description','action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
 

}
export interface Element {
  id:number;
  image:string,
  name: string;
  price: number;
  description: string;
  action:string
}

const ELEMENT_DATA: Element[] = [
  {id: 1,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg', name: 'Hydrogen',price: 1.0079, description: 'H',action:''},
  {id: 2,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Helium', price: 4.0026, description: 'He',action:''},
  {id: 3,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Lithium', price: 6.941, description: 'Li',action:''},
  {id: 4,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Beryllium', price: 9.0122,description: 'Be',action:''},
  {id: 5,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Boron', price: 10.811, description: 'B',action:''},
  {id: 6,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Carbon',price: 12.0107, description: 'C',action:''},
  {id: 7,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Nitrogen', price: 14.0067, description: 'N',action:''},
  {id: 8,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Oxygen',price: 15.9994, description: 'O',action:''},
  {id: 9,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Fluorine',price: 18.9984, description: 'F',action:''},
  {id: 10,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Neon',price: 20.1797,description: 'Ne',action:''},
  {id: 11,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Sodium',price: 22.9897,description: 'Na',action:''},
  {id: 12,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Magnesium',price: 24.305, description: 'Mg',action:''},
  {id: 13,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Aluminum',price: 26.9815, description: 'Al',action:''},
  {id: 14,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Silicon',price: 28.0855, description: 'Si',action:''},
  {id: 15,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Phosphorus',price: 30.9738, description: 'P',action:''},
  {id: 16,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Sulfur',price: 32.065, description: 'S',action:''},
  {id: 17, image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg', name: 'Chlorine',price: 35.453, description: 'Cl',action:''},
  {id: 18,image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg',  name: 'Argon',price: 39.948, description: 'Ar',action:''},
  {id: 19, image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg', name: 'Potassium',price: 39.0983,description: 'K',action:''},
  {id: 20, image:'https://www.shopbeesline.com/pub/media/catalog/product/cache/840782437b090f6ba61d9740b0415d76/5/2/5281018003237_2.jpg', name: 'Calcium', price: 40.078,description: 'Ca',action:''},
];
