import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIServiceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class ordersComponent implements OnInit {
  IDs: any;
  order: any;
  orders: any = [];

  userID = Number(localStorage.getItem('userId'));
  constructor(public myService: APIServiceService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.myService.getUserOrders(this.userID).subscribe({
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
    // console.log(this.orders);
  }
  cancelOrder(id:any){
       this.myService.deleteOrder(id).subscribe(data=>{
        // console.log(data);
       },(e)=>{console.log(e)},
       ()=>{
        window.location.reload();
       })
  }
}
