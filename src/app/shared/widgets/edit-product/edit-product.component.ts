import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
 
  data:any;
  id:any;
  image:any;
  name:any;
  price:any;
  description:any;
myFormValidation:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { 
    if(this.activatedRoute.snapshot.params!=undefined){
      this.data=this.activatedRoute.snapshot.params;
      console.log(this.data);
      this.id=this.data['id'];
      this.image=this.data['image'];
      this.name=this.data['name'];
      this.price=this.data['price'];
      this.description=this.data['description'];
    }
  }
  ngOnInit(): void {
    this.myFormValidation = new FormGroup({
      name: new FormControl(this.name,[Validators.required,Validators.minLength(3)]),
      price:new FormControl(this.price,[Validators.required]),
      description: new FormControl(this.description,[Validators.min(10),Validators.required]),
      action:new FormControl(''),
      image:new FormControl(this.image,[Validators.required])
     
    })
  }
 
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
      let data={
        id:this.id,
        name:this.myFormValidation.value.name,
        price:this.myFormValidation.value.price,
        description:this.myFormValidation.value.description,
        image:this.myFormValidation.value.image,
        action:''};
     
      this.router.navigate(['/products/',data]);
      
    
     
    }
 }

 

 

 

}
