import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';
// import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent{

  
 signUpForm = new FormGroup({
  firstName:new FormControl('', Validators.required),
  lastName:new FormControl('', Validators.required),
  email:new FormControl('', [Validators.required,Validators.email]),
  password:new FormControl('', Validators.required),
  address:new FormControl('', Validators.required),
  confirmPass:new FormControl('',Validators.required ),
 phoneNumber:new FormControl('',[Validators.required,Validators.pattern('^01[0125][0-9]{8}$')]),

},
[PasswordValidators.MatchValidator('password','confirmPass')]
);

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

  

}
