import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import { PasswordValidators } from './password.validators';
import { HttpEventType, HttpResponse,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent  implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';

  imageInfos?: Observable<any>;
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
constructor(private uploadService: FileUploadService) {}
ngOnInit(): void {
  this.imageInfos = this.uploadService.getFiles();
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
selectFile(event: any): void {
  this.message = '';
  this.preview = '';
  this.progress = 0;
  this.selectedFiles = event.target.files;

  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);

    if (file) {
      this.preview = '';
      this.currentFile = file;

      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.preview = e.target.result;
      };

      reader.readAsDataURL(this.currentFile);
    }
  }
}
upload(): void {
  this.progress = 0;

  if (this.selectedFiles) {
    const file: File | null = this.selectedFiles.item(0);

    if (file) {
      this.currentFile = file;

      this.uploadService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.imageInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the image!';
          }

          this.currentFile = undefined;
        },
      });
    }

    this.selectedFiles = undefined;
  }
}
  

}
