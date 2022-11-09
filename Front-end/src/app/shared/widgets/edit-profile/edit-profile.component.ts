import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../modules/dashboard.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  prev:any={

    email:"",
    password:"",
    mobile:"",
    firstname:"",
    lastname:"",
    image:'',
    address:'',
    city:''
  };
// myFormValidation:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,public dashboardService:DashboardService) {  }
  get firstname(){
    return this.prev.get('firstname');
  }
  get lastname(){
    return this.prev.get('lastname');
  }
  get password(){
    return this.prev.get('password');
  }
  get mobile(){
    return this.prev.get('mobile');
  }
  get city(){
    return this.prev.get('city');
  }
  get address(){
    return this.prev.get('address');
  }
  get email(){
    return this.prev.get('email');
  }
  get image(){
    return this.prev.get('image');
  }
  file!: File;
  onChange(event:any){
    this.file=event.target.files[0];
    console.log(this.file);
  }
  id=1;
// email,name,image,password
  ngOnInit(): void {
    this.dashboardService.ShowOneUser(this.id).subscribe(data=>{
      console.log(data.data);
      this.prev=data.data;
    })
  }
 SendData(data:any){

    //Add Data To DB
    var formData=new FormData();
    console.log(this.prev);

    if(this.file){
   
      formData.append('image',this.file,this.file.name); 
      formData.append('firstname',this.prev.firstname);
      formData.append('lastname',this.prev.lastname);
      formData.append('email',this.prev.email);
      formData.append('password',this.prev.password);
      formData.append('mobile',this.prev.mobile);
      formData.append('city',this.prev.city);
      formData.append('address',this.prev.address);
      formData.append('_method','put');
      console.log(formData);
    }else{
      // formData.append('image', this.prev.image); 
      formData.append('firstname',this.prev.firstname);
      formData.append('lastname',this.prev.lastname);
      formData.append('email',this.prev.email);
      formData.append('password',this.prev.password);
      formData.append('mobile',this.prev.mobile);
      formData.append('city',this.prev.city);
      formData.append('address',this.prev.address);
      formData.append('_method','put');
      console.log(formData);
    }
    this.dashboardService.UpdateOneUser(1,formData).subscribe(data=>{
      console.log(data.data);
    },(e)=>{console.log(e)}
    ,()=>{
      this.router.navigateByUrl('')})
    }
 }
