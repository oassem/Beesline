import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  items: any;
  info: any;
  userID: any;

  constructor(private myService: APIServiceService) {}

  ngOnInit(): void {
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      this.userID = JSON.parse(userInfo).id;
    }
    this.myService.getCartItems(1).subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => console.error(err),
    });

    this.myService.getUserInfo(1).subscribe({
      next: (data) => {
        this.info = data;
      },
      error: (err) => console.error(err),
    });
  }

  order() {
    let id = Date.now();
    for (let x in this.items.data) {
      this.myService
        .addOrderItems({
          id: id,
          product_id: this.items.data[x].product_id,
          user_id: this.items.data[x].user_id,
          quantity: this.items.data[x].quantity,
        })
        .subscribe();

      this.myService.deleteCartItem(this.items.data[x].id).subscribe();
    }
  }
}
