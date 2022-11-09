import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class APIServiceService {
  constructor(private myClient: HttpClient) {}

  BASE_URL = 'http://127.0.0.1:8000/api';

  getCartItems(id: number):Observable<any>{
    return this.myClient.get(this.BASE_URL + `/carts/${id}`);
  }

  getUserInfo(id: number):Observable<any>{
    return this.myClient.get(this.BASE_URL + `/users/${id}`);
  }

  updateUser(id: number, data: any):Observable<any> {
    return this.myClient.post(this.BASE_URL + `/users/${id}`, data);
  }


}
