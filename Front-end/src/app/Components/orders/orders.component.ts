import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class ordersComponent implements OnInit {
  IDs: any;
  order: any;
  orders: any = [];
  userID: any;

  constructor(public myService: APIServiceService, private activatedRoute: ActivatedRoute) {
    this.userID = activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.myService.getUserOrders(1).subscribe({
      next: (data) => {
        this.IDs = data;
        for (let x in this.IDs.data) {
          this.myService.getOrders(this.IDs.data[x].order_id).subscribe({
            next: (data) => {
              this.order = data;
              this.orders.push(this.order.data);
            },
            error: (err) => console.error(err),
          });
        }
      },
      error: (err) => console.error(err),
    });
    console.log(this.orders);
  }
}
