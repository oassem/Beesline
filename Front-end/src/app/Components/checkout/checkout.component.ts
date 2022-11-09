import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  items: any;

  constructor(private myService: APIServiceService) {}

  ngOnInit(): void {
    this.myService.getCartItems(1).subscribe({
      next: (data) => {
        this.items = data;
        console.log(this.items.data[0]['product info'].name);
      },
      error: (err) => console.error(err),
    });
  }
}
