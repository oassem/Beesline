import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {

  id = this.activatedRoute.snapshot.params['id'];
  myFormValidation = new FormGroup({
    discount: new FormControl()
  })
  constructor(private activatedRoute:ActivatedRoute,private dashboardService:DashboardService,private router:Router) { }
productData:any;
  ngOnInit(): void {
    this.dashboardService.ShowOneProduct(this.id).subscribe(data=>{
      console.log(data.data);
      this.productData=data.data;
    })
  }
  get discount(){
    return this.myFormValidation.get('discount');
  }
  
  SendData(data:any){
    console.log(data);
    this.dashboardService.CreateOneOffer({'oldPrice':this.productData.price,'discount':this.myFormValidation.value.discount,'productId':this.id}).subscribe(data=>{
      console.log(data.data);
    },(e)=>{console.log(e)},
    ()=>{
      this.router.navigateByUrl('/products');
    })
  }
}
