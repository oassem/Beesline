import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PasswordValidators } from './password.validators';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  flag: boolean = false;
  errorArray = null;
  signUpForm = new FormGroup(
    {
      firstName: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
      password: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      confirmPass: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^01[0125][0-9]{8}$'),
      ]),
    },
    [PasswordValidators.MatchValidator('password', 'confirmPass')]
  );

  constructor(
    private dataService: DataService,
    private router: Router,

  ) { }
  ngOnInit(): void { }

  get FirstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get address() {
    return this.signUpForm.get('address');
  }
  get passwordMatchError() {
    return (
      this.signUpForm.getError('mismatch') &&
      this.signUpForm.get('confirmPass')?.touched
    );
  }
  get phoneNumber() {
    return this.signUpForm.get('phoneNumber');
  }

  file: any;
  onChange(event: any) {
    this.file = event.target.files[0];

  }


  onSubmit(data: any) {
    if (
      this.file && this.signUpForm.valid
    ) {
      const formData = new FormData();
      formData.append('firstname', data.value.firstName);
      formData.append('lastname', data.value.lastName);
      formData.append('email', data.value.email);
      formData.append('image', this.file, this.file.name);
      formData.append('address', data.value.address);
      formData.append('password', data.value.password);
      formData.append('city', data.value.city);
      formData.append('mobile', data.value.phoneNumber);

      this.dataService.AddUser(formData).subscribe(
        (data) => {
          console.log(data);
        },
        (e) => {
          if (e.error.errors.email[0]) {
            this.errorArray = e.error.errors.email[0];
            console.log(this.errorArray);
          }
        },
        () => {
          this.router.navigateByUrl('/login');
        }
      );
    }
    else if (this.file === undefined || null || this.signUpForm.errors) {
      this.flag = true;
    }

  }

}



