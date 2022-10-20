import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
data:any;
  constructor(private activatedRoute:ActivatedRoute) {
    if(this.activatedRoute.snapshot.params!=undefined){
      this.data=this.activatedRoute.snapshot.params;
      console.log(this.data);
    }
      
   }

  ngOnInit(): void {
  }

}
