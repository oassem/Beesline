import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  counter: any;

  constructor(private myService: APIService) { }

  ngOnInit(): void {
    this.myService.getCartItems(1).subscribe({
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
    this.myService.deleteCartItem(id).subscribe((result) => {
      this.ngOnInit();
    });
  }

  dec(id: any, prod: any, quan: any) {
    if (quan > 1) {
      this.myService.updateCartItem(id, { user_id: 1, product_id: prod, quantity: --quan }).subscribe((result) => {
        this.ngOnInit();
      });
    }
  }

  inc(id: any, prod: any, quan: any) {
    this.myService.updateCartItem(id, { user_id: 1, product_id: prod, quantity: ++quan }).subscribe((result) => {
      this.ngOnInit();
    });
  }

}
