import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: any;
  items: any;

  constructor(public myService: APIService) { }

  ngOnInit(): void {
    this.myService.getAllOffers().subscribe({
      next: (data) => this.offers = data,
      error: (err) => console.error(err)
    });
  }

  add(id: any) {
    let flag = false;
    let index: number;
    let quantity: number;
    this.myService.getCartItems(1).subscribe({
      next: (data) => {
        this.items = data;
        for (let x in this.items.data) {
          if (this.items.data[x].product_id == id) {
            flag = true;
            index = this.items.data[x].id;
            quantity = this.items.data[x].quantity;
          }
        }
        if (!flag) { this.myService.addCartItem({ user_id: 1, product_id: id, quantity: 1 }).subscribe(); }
        else { this.myService.updateCartItem(index, { user_id: 1, product_id: id, quantity: ++quantity }).subscribe(); }
      },
      error: (err) => console.error(err)
    });
  }

}
