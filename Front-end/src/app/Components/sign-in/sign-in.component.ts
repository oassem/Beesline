import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  flag: boolean = false;
<<<<<<< HEAD
  userName: string = '';
=======
  signUp:string='sign'
  showIcon:boolean=false;
  currentRoute=this.router.url;
  userName: string = "";
>>>>>>> logynkhaled-v2
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

<<<<<<< HEAD
  constructor(private dialog: MatDialog, private dataService: DataService) {}
=======
  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
    private router: Router
  ) { 
    if(this.currentRoute==="/login"){
      this.showIcon=false;
    }
    else{
      this.showIcon=true;
    }
 
  }
>>>>>>> logynkhaled-v2

  ngOnInit(): void {}

  signIn(data: any) {
    this.dataService.AuthUser(data.value).subscribe(
      (result) => {
        if (result) {
<<<<<<< HEAD
          if (localStorage.getItem('userId') == '1') {
            setTimeout(() => {
              window.location.href = '/dashboard/home';
            }, 1000);
          } else {
            setTimeout(() => {
              window.location.href = '/';
            }, 1000);
          }
=======
         if(localStorage.getItem('userId')=='1'){
          setTimeout(() => {
            window.location.href = '/dashboard/home';

          }, 1000);
         }else{
          setTimeout(() => {
            window.location.href = '/';

          }, 1000);}
>>>>>>> logynkhaled-v2
          this.dialog.closeAll();
        }
      },
      () => {
        this.flag = true; //validation message flag
      }
    );
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  close_popup() {
    this.dialog.closeAll();
  }
  
}
