import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  products: any;
  offers: any;
  items: any;
  param: any;

  constructor(myRoute: ActivatedRoute, private myService: APIService) {
    this.param = myRoute.snapshot.params['name'];
  }

  ngOnInit(): void {
    this.myService.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error(err)
    });

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
