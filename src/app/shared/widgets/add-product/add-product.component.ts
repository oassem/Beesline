import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  myFormValidation = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    price:new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.min(10),Validators.required]),
    action:new FormControl(''),
    image:new FormControl('',[Validators.required])
   
  })
  get NameValid(){
    return this.myFormValidation.controls.name.valid;
  }

  get PriceValid(){
    return this.myFormValidation.controls.price.valid;
  }

  get DescValid(){
    return this.myFormValidation.controls.description.valid;
  }
  get ImgValid(){
    return this.myFormValidation.controls.image.valid;
  }
 

  SendData(){
   
    //Add Data To DB
    if(this.myFormValidation.valid){
      //ADD--->DB
     
      
      
      let data={id:0,name:this.myFormValidation.value.name,price:this.myFormValidation.value.price,description:this.myFormValidation.value.description,image:this.myFormValidation.value.image,action:''};
     
      this.router.navigate(['/products/',data]);
      
    
     
    }
  }
}
