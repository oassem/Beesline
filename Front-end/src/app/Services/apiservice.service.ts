import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  constructor(private myClient: HttpClient) {}

  BASE_URL = 'http://127.0.0.1:8000/api';
  IMG_URL = 'http://127.0.0.1:8000/public/';

  getCartItems(id: number): Observable<any> {
    return this.myClient.get(this.BASE_URL + `/carts/${id}`);
  }

  getUserInfo(id: number): Observable<any> {
    return this.myClient.get(this.BASE_URL + `/users/${id}`);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.myClient.post(this.BASE_URL + `/users/${id}`, data);
  }

  addOrderItems(data: any) {
    return this.myClient.post(this.BASE_URL + '/orders', data);
  }

  deleteCartItem(id: number) {
    return this.myClient.delete(this.BASE_URL + `/carts/${id}`);
  }
  updateCartItem(id: number, data: any) {
    return this.myClient.put(this.BASE_URL + `/carts/${id}`, data);
  }

  getUserOrders(id: number) {
    return this.myClient.get(this.BASE_URL + `/user_orders/${id}`);
  }

  getOrders(id: number) {
    return this.myClient.get(this.BASE_URL + `/orders/${id}`);
  }
  deleteOrder(id:number){
    return this.myClient.delete(this.BASE_URL +`/orders/${id}`);
  }
}
