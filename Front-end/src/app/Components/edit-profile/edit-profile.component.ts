import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
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
  // selectedFiles?: FileList;
  // currentFile?: File;

  // progress = 0;
  // message = '';
  // preview = '';

  // imageInfos?: Observable<any>;
  // prev = new FormGroup(
  //   {
  //     firstName: new FormControl('', Validators.required),
  //     lastName: new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', Validators.required),
  //     address: new FormControl('', Validators.required),
  //     confirmPass: new FormControl('', Validators.required),
  //     phoneNumber: new FormControl('', [
  //       Validators.required,
  //       Validators.pattern('^01[0125][0-9]{8}$'),
  //     ]),
  //   },
  //   [PasswordValidators.MatchValidator('password', 'confirmPass')]
  // );

  constructor(
    private myService: APIServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myService.getUserInfo(this.id).subscribe(
      data => {
        this.prev = data.data;
        console.log(data.data);
      },
      (e) => {
        console.log(e);
      }
    );
    // this.imageInfos = this.uploadService.getFiles();
    // this.myService
    //   .updateUser(1, {
    //     firstname: 'ahmed',
    //     lastname: 'yasser',
    //     email: 'oassem@gmail.com',
    //     mobile: '1111',
    //     password: '123',
    //     address: 'maxhhhhhhhhhhhh',
    //     city: 'alexandria',
    //   })
    //   .subscribe();
  }

  /*edit(pswd:string){
    this.myService.updateUser(1, {password: pswd}).subscribe();
  }*/

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
  // get image() {
  //   return this.prev.get('image');
  // }

  get password() {
    return this.prev.get('password');
  }
  // get passwordMatchError(){
  //   return this.prev.get('password');
  // }
  // get passwordMatchError() {
  //   return (
  //     this.prev.getError('mismatch') &&
  //     this.prev.get('confirmPass')?.touched
  //   );
  // }

  get mobile() {
    return this.prev.get('mobile');
  }

  // selectFile(event: any): void {
  //   this.message = '';
  //   this.preview = '';
  //   this.progress = 0;
  //   this.selectedFiles = event.target.files;

  //   if (this.selectedFiles) {
  //     const file: File | null = this.selectedFiles.item(0);
  //     if (file) {
  //       this.preview = '';
  //       this.currentFile = file;
  //       const reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         console.log(e.target.result);
  //         this.preview = e.target.result;
  //       };
  //       reader.readAsDataURL(this.currentFile);
  //     }
  //   }
  // }
  file!:File;
  selectFile(event: any) {
    this.file = event.target.files[0];
  }

  upload(data: any) {
    console.log(data.value);
    var formData = new FormData();
    if(data.value.newsletter==true){
      data.value.newsletter=1;
    }
    if(data.value.newsletter==false){
      data.value.newsletter=0;
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
      // formData.append('image', data.value.image);
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
      (data) => {
        console.log(data);
      },
      (e) => {
        console.log(e);
      },
      () => {
        this.router.navigateByUrl('/profile');
      }
    );
  }
  // this.progress = 0;

  // if (this.selectedFiles) {
  //   const file: File | null = this.selectedFiles.item(0);
  //   if (file) {
  //     this.currentFile = file;
  //     this.uploadService.upload(this.currentFile).subscribe({
  //       next: (event: any) => {
  //         if (event.type === HttpEventType.UploadProgress) {
  //           this.progress = Math.round((100 * event.loaded) / event.total);
  //         } else if (event instanceof HttpResponse) {
  //           this.message = event.body.message;
  //           this.imageInfos = this.uploadService.getFiles();
  //         }
  //       },
  //       error: (err: any) => {
  //         console.log(err);
  //         this.progress = 0;
  //         if (err.error && err.error.message) {
  //           this.message = err.error.message;
  //         } else {
  //           this.message = 'Could not upload the image!';
  //         }
  //         this.currentFile = undefined;
  //       },
  //     });
  //   }
  //   this.selectedFiles = undefined;
  // }
}