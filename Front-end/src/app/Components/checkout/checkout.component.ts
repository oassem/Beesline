import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  items: any;
  counter: any;
  info: any;
  userID = Number(localStorage.getItem('userId'));
  loading = false;

  constructor(private myService: APIServiceService) {}

  ngOnInit(): void {
    this.myService.getCartItems(this.userID).subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => console.error(err),
    });

    this.myService.getUserInfo(this.userID).subscribe({
      next: (data) => {
        this.info = data;
      },
      error: (err) => console.error(err),
    });
  }

  order() {
    this.loading = true;
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
    setTimeout(() => {
      window.location.href = '/orders';
    }, 5000);
  }
}
