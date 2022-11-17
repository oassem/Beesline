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
 GetAllNotRepeatedOrder():Observable<any>{
  return this.http.get(`${this.base_url}/allOrders`);
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
GetAreaChart():Observable<any>{
  return this.http.get(`${this.base_url}/areachart`);
}
GetNoOfUsers():Observable<any>{
  return this.http.get(`${this.base_url}/newusers`);
}
GetAllOrderAccepted():Observable<any>{
  return this.http.get(`${this.base_url}/orderAccepted`);
}
GetAllOrderRejected():Observable<any>{
  return this.http.get(`${this.base_url}/orderRejected`);
}
GetAllOrderPending():Observable<any>{
  return this.http.get(`${this.base_url}/orderPending`);
}
GetAllCatProducts():Observable<any>{
  return this.http.get(`${this.base_url}/catProducts`);
}
  
  
  
   }
 
   