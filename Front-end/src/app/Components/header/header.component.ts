import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchValue: any;
  userName: string = '';
  items: any;
  counter: any;

  constructor(private dialog: MatDialog, private myService: APIService) {
    let token = localStorage.getItem('token');
    if (token != null) {
      let data = localStorage.getItem('userData');
      let userData = JSON.parse(data!);
      let userObj: any = Object.values(userData)['0'];
      this.userName = userObj['firstname'];
    } else {
      this.userName = 'Sign in';
    }
  }
  
  ngOnInit(): void {
    this.myService.getCartItems(Number(localStorage.getItem('userId'))).subscribe({
      next: (data) => {
        this.items = data;
        this.counter = 0;
        for (let x in this.items.data) {
          this.counter++;
        }
      },
      error: (err) => console.error(err)
    });
  }

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  signIn() {
    let token = localStorage.getItem('token');
    if (token != null) {
      this.trigger.openMenu();
    } else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.width = '600px';
      dialogConfig.height = '500px';
      this.dialog.open(SignInComponent, dialogConfig);
      this.trigger.closeMenu();
    }
  }

  logOut() {
    let token = localStorage.getItem('token');
    if (token != null) {
      localStorage.clear();
      window.location.reload();
    }
  }

  onChangeEvent(event: any) {
    this.searchValue = event.target.value;
    window.location.href = `/products/${this.searchValue}`;
  }
}
