import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  product: any;
  products: any;
  offers: any;
  items: any;

  constructor(myRoute: ActivatedRoute, public myService: APIService) {
    this.id = myRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.myService.getProductDetails(this.id).subscribe({
      next: (data) => (this.product = data),
      error: (err) => console.error(err),
    });

    this.myService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => console.error(err),
    });

    this.myService.getAllOffers().subscribe({
      next: (data) => (this.offers = data),
      error: (err) => console.error(err),
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
        if (!flag) {
          this.myService
            .addCartItem({ user_id: 1, product_id: id, quantity: 1 })
            .subscribe();
        } else {
          this.myService
            .updateCartItem(index, {
              user_id: 1,
              product_id: id,
              quantity: ++quantity,
            })
            .subscribe();
        }
      },
      error: (err) => console.error(err),
    });
  }
}
