import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';
import { HttpEventType, HttpResponse,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent  implements OnInit {
  
 signUpForm = new FormGroup({
  firstName:new FormControl('', Validators.required),
  lastName:new FormControl('', Validators.required),
  email:new FormControl('', [Validators.required,Validators.email]),
  password:new FormControl('', Validators.required),
  address:new FormControl('', Validators.required),
  confirmPass:new FormControl('',Validators.required ),
  city:new FormControl(''),
  
 phoneNumber:new FormControl('',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),

},
[PasswordValidators.MatchValidator('password','confirmPass')]
);
constructor(private dataService:DataService , private router:Router) {}
ngOnInit(): void {

}
get FirstName(){
  return this.signUpForm.get('firstName')
}
get lastName(){
  return this.signUpForm.get('lastName')
}
get email(){
  return this.signUpForm.get('email')
}
get address(){
  return this.signUpForm.get('address')
}
get passwordMatchError() {
  return (
    this.signUpForm.getError('mismatch') &&
    this.signUpForm.get('confirmPass')?.touched
  );
}
get phoneNumber(){
  return this.signUpForm.get('phoneNumber')
}
//  onSubmit(){
//   console.log(this.signUpForm.value);
//   this.dataService.signUp(this.signUpForm.value).subscribe(res=>{
//     this.data=res;
//     // console.log(res);
//   })
//  }
 file:any;
 onChange(event:any){
   this.file=event.target.files[0];
  }
  
  onSubmit(data:any){
    console.log(data.value);
    const formData = new FormData();
    formData.append('firstname',data.value.firstName);
    formData.append('lastname' ,data.value.lastName);
     formData.append ('email' ,data.value.email);
     formData.append ('image', this.file,this.file.name);
     formData.append('address' ,data.value.address);
     formData.append ('password' ,data.value.password),
     formData.append ('city',data.value.city);
     formData.append('mobile' ,data.value.phoneNumber);
    
     this.dataService.AddUser(formData).subscribe(data=>{
      console.log(data);
    },(e)=>{console.log(e)}
    ,()=>{this.router.navigateByUrl('')})

  
    
    // this.dashboardService.AddOneProduct(formData).subscribe(data=>{
    //   console.log(data);
    // },(e)=>{console.log(e)}
    // ,()=>{this._router.navigateByUrl('/products')})

    // const formData = new FormData();
    // formData.append('firstName',data.value.firstName);
    // formData.append('lastName' ,data.value.lastName);
    // formData.append('email' ,data.value.email);
    // // formData.append('image', this.file,this.file.name);
    // formData.append('address' ,data.value.address);
    // formData.append('password' ,data.value.password);
    // formData.append('city',data.value.city);
    // formData.append('phoneNumber' ,data.value.phoneNumber);
    //  console.log( this.file);
   
  }
}
