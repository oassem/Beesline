import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  counter: any;
  userID = Number(localStorage.getItem('userId'));
  constructor(public myService: APIService) {}

  ngOnInit(): void {
    this.myService.getCartItems(this.userID).subscribe({
      next: (data) => {
        this.items = data;
        this.counter = 0;
        for (let x in this.items.data) {
          this.counter++;
        }
      },
      error: (err) => console.error(err)
    });
  }

  delete(id: any) {
    this.myService.deleteCartItem(id).subscribe(() => {
      window.location.reload();
    });
  }

  dec(id: any, prod: any, quan: any) {
    if (quan > 1) {
      this.myService.updateCartItem(id, { user_id: this.userID, product_id: prod, quantity: --quan }).subscribe((result) => {
        this.ngOnInit();
      });
    }
  }

  inc(id: any, prod: any, quan: any) {
    this.myService.updateCartItem(id, { user_id: this.userID, product_id: prod, quantity: ++quan }).subscribe((result) => {
      this.ngOnInit();
    });
  }

}
