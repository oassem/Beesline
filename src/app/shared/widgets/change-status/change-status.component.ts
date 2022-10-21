import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
interface OrderStatus {
  orderStatus: string;
}
@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent implements OnInit {
  statusControl = new FormControl<OrderStatus | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  // accepted,rejected
  orders: OrderStatus[] = [
    {orderStatus: 'Pending'},
    {orderStatus: 'accepted'},
    {orderStatus: 'rejected'}
  ];
  data:any;
  id:any;
   date:any;
   username:any;
   totalprice:any;
   producttitles:any;
   orderStatus:any;
   myFormValidation:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
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
    this.myFormValidation = new FormGroup({
      orderStatus: new FormControl(this.orderStatus) 
    })
  }
  SendData(){

    //Add Data To DB
    if(this.myFormValidation.valid){
      //ADD--->DB   
      let data={
        id:this.id,
        date:this.date,
        username:this.username,
        totalprice:this.totalprice,
        producttitles:this.producttitles,
        orderStatus:this.statusControl.value?.orderStatus,
        action:''};
        console.log(data);
     
      this.router.navigate(['/orders/',data]);
      
    
     
    }
 }
}
