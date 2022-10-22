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

  data:any;
  id:any;
name:any;
email:any;
image:any;
password:any;
myFormValidation:any;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private dashboardService:DashboardService) { 
    if(this.activatedRoute.snapshot.params!=undefined){
      this.data=this.activatedRoute.snapshot.params;
      console.log(this.data);
      this.id=this.data['id'];
      this.email=this.data['email'];
      this.name=this.data['name'];
      this.image=this.data['image'];
      this.password=this.data['description'];
    }
  }
// email,name,image,password
  ngOnInit(): void {
    this.data= this.dashboardService.getProfile();
    this.id=this.data['id'];
    this.name=this.data['name'];
    this.email=this.data['email'];
    this.image=this.data['image'];
    this.password=this.data['password'];
    this.myFormValidation = new FormGroup({
      name: new FormControl(this.name,[Validators.required,Validators.minLength(3)]),
      password:new FormControl(this.password,[Validators.required]),
      email: new FormControl(this.email,[Validators.required]),
      image:new FormControl(this.image,[Validators.required])
     
    })
  }
 
  get NameValid(){
    return this.myFormValidation.controls.name.valid;
  }

  get emailValid(){
    return this.myFormValidation.controls.email.valid;
  }

  get passValid(){
    return this.myFormValidation.controls.password.valid;
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
        email:this.myFormValidation.value.email,
        password:this.myFormValidation.value.password,
        image:this.myFormValidation.value.image};
     this.dashboardService.getProfileData(this.data);
      this.router.navigateByUrl('/dashboard/');
      
    
     
    }
 }

 

 

}
