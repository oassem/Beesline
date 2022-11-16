import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/services/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  emailValidation = false;
  prev: any = {
    email: '',
    password: '',
    mobile: '',
    firstname: '',
    lastname: '',
    image: '',
    address: '',
    city: '',
    newsletter: '',
  };

  constructor(
    public myService: APIServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myService.getUserInfo(this.id).subscribe(
      (data) => {
        this.prev = data.data;
        console.log(data.data);
      },
      (e) => {
        console.log(e);
      }
    );
  }

  get firstname() {
    return this.prev.get('firstName');
  }

  get lastname() {
    return this.prev.get('lastName');
  }

  get email() {
    return this.prev.get('email');
  }

  get address() {
    return this.prev.get('address');
  }
  get newsletter() {
    return this.prev.get('newsletter');
  }
  get city() {
    return this.prev.get('city');
  }

  get password() {
    return this.prev.get('password');
  }

  get mobile() {
    return this.prev.get('mobile');
  }

  file!: File;
  selectFile(event: any) {
    this.file = event.target.files[0];
  }

  upload(data: any) {
    if (data.valid) {
      var formData = new FormData();
      if (data.value.newsletter == true) {
        data.value.newsletter = 1;
      }
      if (data.value.newsletter == false) {
        data.value.newsletter = 0;
      }
      if (this.file) {
        formData.append('image', this.file, this.file.name);
        formData.append('firstname', data.value.firstname);
        formData.append('lastname', data.value.lastname);
        formData.append('email', data.value.email);
        formData.append('password', data.value.password);
        formData.append('mobile', data.value.mobile);
        formData.append('city', data.value.city);
        formData.append('address', data.value.address);
        formData.append('newsletter', data.value.newsletter);
        formData.append('_method', 'put');
      } else {
        formData.append('firstname', data.value.firstname);
        formData.append('lastname', data.value.lastname);
        formData.append('email', data.value.email);
        formData.append('password', data.value.password);
        formData.append('mobile', data.value.mobile);
        formData.append('city', data.value.city);
        formData.append('newsletter', data.value.newsletter);
        formData.append('address', data.value.address);
        formData.append('_method', 'put');
      }

      this.myService.updateUser(this.id, formData).subscribe(
        () => {},
        (e) => {
          if(e.error.errors.email[0] == 'The email has already been taken.'){
            this.emailValidation = true;
          }
        },
        () => {
          this.router.navigateByUrl('/profile');
        }
      );
    }
  }
}
