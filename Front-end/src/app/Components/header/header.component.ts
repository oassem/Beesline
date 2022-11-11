import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchValue:string='';
  userName:string='';
  private _router: any;
  constructor( private dialog:MatDialog ,private router:Router) {
    let token=localStorage.getItem('token');
    if(token!=null){  
     let data= localStorage.getItem('userData');
     let  userData=JSON.parse(data!);
      let userObj:any =Object.values(userData)["0"];
       this.userName= userObj['firstname'];
      }
      else
      this.userName="SignIn";
  }
  ngOnInit(): void { }

  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  signIn(){
    let token=localStorage.getItem('token');
    if(token!=null){
      this.trigger.openMenu();
  }
  else{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width="600px";
    dialogConfig.height="500px";
    this.dialog.open(SignInComponent,dialogConfig );
    this.trigger.closeMenu();
  }
  }
  
  logOut(){
    let token=localStorage.getItem('token');
    if(token!=null){
      localStorage.clear();
      window.location.reload()
    }
  }
 

  onChangeEvent(event: any) { 
  this.searchValue=event.target.value;
  console.log( this.searchValue);
  this.searchValue='';
  // this.router.navigateByUrl('/products/{ this.searchValue }')
 // this._router.navigate(['SecondComponent', {p1: this.searchValue}]);
  }
}


