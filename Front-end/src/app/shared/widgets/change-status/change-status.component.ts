import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';
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
  orders: OrderStatus[] = [
    {orderStatus: 'Pending'},
    {orderStatus: 'accepted'},
    {orderStatus: 'rejected'}
  ];
   orderStatus:any;
   myFormValidation:any;
   id = this.activatedRoute.snapshot.params['id'];
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private dashboardService:DashboardService) {}
  ngOnInit(): void {
    this.myFormValidation = new FormGroup({
      orderStatus: new FormControl(this.orderStatus) 
    })
  }
  SendData(data:any){
   
    if(this.myFormValidation.valid){
      
      let orderData={
        orderStatus:this.statusControl.value?.orderStatus,
        _method:'put'
      };
      this.dashboardService.UpdateOneOrder(this.id,orderData).subscribe(data=>{
      },(e)=>{console.log(e)},
      ()=>{
        this.router.navigateByUrl('/dashboard/orders');
      });    
    }
 }
}
