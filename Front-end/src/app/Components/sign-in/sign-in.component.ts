import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  flag: boolean = false;
  signUp:string='sign'
  showIcon:boolean=false;
  currentRoute=this.router.url;
  userName: string = "";
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

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

  ngOnInit(): void {}

  signIn(data: any) {
    this.dataService.AuthUser(data.value).subscribe(
      (result) => {
        if (result) {
          if (localStorage.getItem('userId') == '1') {
            setTimeout(() => {
              window.location.href = '/dashboard/home';
            }, 1000);
          } else {
        
            setTimeout(() => {
           
              window.location.href = '/';
            }, 1000);
            

          }
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
