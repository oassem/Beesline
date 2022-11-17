import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  prev:any={
    name:"",
    description:"",
    price:"",
    image:"",
    category:"",
    stock:""
  };
  id = this.activatedRoute.snapshot.params['id'];
 
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private http:HttpClient,public dashboardService:DashboardService) { }
  ngOnInit(): void {
    this.dashboardService.ShowOneProduct(this.id).subscribe(data=>{
      this.prev=data.data;
      console.log(this.prev);
    })
  }
  get name(){
    return this.prev.get('name');
  }
  get price(){
    return this.prev.get('price');
  }
  get description(){
    return this.prev.get('description');
  }
  get image(){
    return this.prev.get('image');
  }
  get stock(){
    return this.prev.get('stock');
  }
  get category(){
    return this.prev.get('category');
  }
  file!: File;
  onChange(event:any){
    this.file=event.target.files[0];
    console.log(this.file);
  }
 SendData(data:any){
 
         var formData = new FormData();
         console.log(this.prev);

        if(this.file){
        
          formData.append('image',this.file,this.file.name); 
          formData.append('name',this.prev.name);
          formData.append('description',this.prev.description);
          formData.append('category',this.prev.category);
          formData.append('price',this.prev.price);
          formData.append('stock',this.prev.stock);
          formData.append('_method','put');
          console.log(formData);
        }else{
          // formData.append('image', this.prev.image); 
          formData.append('name',this.prev.name);
          formData.append('description',this.prev.description);
          formData.append('category',this.prev.category);
          formData.append('price',this.prev.price);
          formData.append('stock',this.prev.stock);
          formData.append('_method','put');
          console.log(formData);
        }
       
        this.dashboardService.UpdateOneProduct(formData,this.id).subscribe(data=>{
          console.log(data);
        },(e)=>{
          console.log(e);
        }
        ,()=>{this.router.navigateByUrl('/dashboard/products')});
      }
    }

 

 
