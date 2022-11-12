import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private _router:Router,private dashboardService:DashboardService) { }
  ngOnInit(): void {}
  myFormValidation = new FormGroup({
    name: new FormControl(),
    category:new FormControl(),
    price:new FormControl(),
    description: new FormControl(),
    stock:new FormControl()
  })
  get name(){
    return this.myFormValidation.get('name');
  }
  get Price(){
    return this.myFormValidation.get('price');
  }
  get category(){
    return this.myFormValidation.get('category');
  }
  get price(){
    return this.myFormValidation.get('price');
  }
 get description(){
  return this.myFormValidation.get('description');
 }
 get stock(){
   return this.myFormValidation.get('stock');
 }
 file:any;
 onChange(event:any){
   this.file=event.target.files[0];
  }

  SendData(data:any){
    const formData = new FormData();
    formData.append('name',this.myFormValidation.value.name);
    formData.append('description',this.myFormValidation.value.description);
    formData.append('category',this.myFormValidation.value.category);
    formData.append('image', this.file,this.file.name);
    formData.append('price',this.myFormValidation.value.price);
    formData.append('stock',this.myFormValidation.value.stock);
    this.dashboardService.AddOneProduct(formData).subscribe(data=>{
      console.log(data);
    },(e)=>{console.log(e)}
    ,()=>{this._router.navigateByUrl('/dashboard/products')})
  }
}
