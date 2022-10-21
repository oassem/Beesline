import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
data:any;
id:any;
 date:any;
 username:any;
 totalprice:any;
 producttitles:any;
 orderStatus:any;


  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    if(this.activatedRoute.snapshot.params!=undefined){
      this.data=this.activatedRoute.snapshot.params;
      console.log(this.data);
      this.id=this.data['id'];
      this.date=this.data['date'];
      this.username=this.data['username'];
      this.totalprice=this.data['totalprice'];
      this.producttitles=this.data['producttitles'];
      this.orderStatus=this.data['orderStatus'];
    }
   }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigateByUrl('/orders');
  }
}
