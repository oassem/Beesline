import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public imageUrl="http://127.0.0.1:8000/public/";
  constructor(private http: HttpClient) { }
  private base_url="http://127.0.0.1:8000/api";

  //CRUD System for Products
  GetAllProducts():Observable<any>{
    return this.http.get(`${this.base_url}/products`);
  }
  AddOneProduct(data:any): Observable<any>{
    return this.http.post(`${this.base_url}/products`,data)
  }
  ShowOneProduct(id:number): Observable<any>{
    return this.http.get(`${this.base_url}/products/${id}`);
  } 
  UpdateOneProduct(data:any,id:number): Observable<any>{
    return this.http.post(`${this.base_url}/products/${id}`,data);
  }
  deleteOneProduct(id:number): Observable<any>{
    return this.http.post(`${this.base_url}/products/${id}`,{_method:"delete"});
  }
  //CRUD System for Users
 GetAllUsers(): Observable<any>{
  return this.http.get(`${this.base_url}/users`);
 }
 ShowOneUser(id:number): Observable<any>{
  return this.http.get(`${this.base_url}/users/${id}`);
 }
 UpdateOneUser(id:number,data:any): Observable<any>{
   return this.http.post(`${this.base_url}/users/${id}`,data);
 }
 deleteOneUser(id:number): Observable<any>{
   return this.http.post(`${this.base_url}/users/${id}`,{_method:"delete"});
 }
 //CRUD System for offers
 GetAllOffers(): Observable<any>{
  return this.http.get(`${this.base_url}/offers`);
 }
 ShowOneOffer(id:number): Observable<any>{
  return this.http.get(`${this.base_url}/offers/${id}`);
 }
 CreateOneOffer(data:any): Observable<any>{
  return this.http.post(`${this.base_url}/offers`,data);
 }
 UpdateOneOffer(id:number,data:any): Observable<any>{
  return this.http.post(`${this.base_url}/offers/${id}`,data);
 }
 deleteOneOffer(id:number): Observable<any>{
  return this.http.post(`${this.base_url}/offers/${id}`,{_method:"delete"});
 }
 //CRUD System for orders
 GetAllOrders(): Observable<any>{
  return this.http.get(`${this.base_url}/orders`);
 }
 ShowOneOrder(id:number): Observable<any>{
  return this.http.get(`${this.base_url}/orders/${id}`);
 }
 UpdateOneOrder(id:number,data:any): Observable<any>{
  return this.http.post(`${this.base_url}/orders/${id}`,data);
 }
//CRUD System for User_orders, this can be used in user details :) 
ShowOneUserOrder(id:number): Observable<any>{//user id
return this.http.get(`${this.base_url}/user_orders/${id}`);
}
//CRUD system for carts , this can be used in user details :)
ShowOneUserCart(id:number): Observable<any>{
return this.http.get(`${this.base_url}/carts/${id}`);
}
//CRUD system for contacts
GetAllContacts(): Observable<any>{
  return this.http.get(`${this.base_url}/contacts`);
}
GetOneContact(id:number): Observable<any>{
 return this.http.get(`${this.base_url}/contacts/${id}`);
}

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
  
  
   }
 
   