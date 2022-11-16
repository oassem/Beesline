import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private myClient: HttpClient) {}

  BASE_URL = 'http://127.0.0.1:8000/api';
  IMG_URL = 'http://127.0.0.1:8000/public/';

  getAllProducts() {
    return this.myClient.get(this.BASE_URL + '/products');
  }

  getFilterProducts(filter: any) {
    return this.myClient.get(this.BASE_URL + `/products?name[like]=${filter}`);
  }

  getAllCategories() {
    return this.myClient.get(this.BASE_URL + '/categories');
  }

  getProductDetails(id: number) {
    return this.myClient.get(this.BASE_URL + `/products/${id}`);
  }

  getAllOffers() {
    return this.myClient.get(this.BASE_URL + '/offers');
  }

  addCartItem(data: any) {
    return this.myClient.post(this.BASE_URL + '/carts', data);
  }

  updateCartItem(id: number, data: any) {
    return this.myClient.put(this.BASE_URL + `/carts/${id}`, data);
  }

  getCartItems(id: number) {
    return this.myClient.get(this.BASE_URL + `/carts/${id}`);
  }

  deleteCartItem(id: number) {
    return this.myClient.delete(this.BASE_URL + `/carts/${id}`);
  }

  addContact(data: any) {
    return this.myClient.post(this.BASE_URL + '/contacts', data);
  }
}
