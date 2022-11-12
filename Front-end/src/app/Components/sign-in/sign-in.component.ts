import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  flag: boolean = false;
  userName: string = "";
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  signIn(data: any) {
    this.dataService.AuthUser(data.value).subscribe(
      result => {
        if (result) {
          // this.router.navigateByUrl('/');
          setTimeout(() => {
            window.location.href = '/';
          }, 1000);
          this.dialog.closeAll();
        }
      },
      error => {
        this.flag = true;
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
