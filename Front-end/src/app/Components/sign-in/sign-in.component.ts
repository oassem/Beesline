import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  invalidLogin:boolean =false;
  userName:string="";
  signInForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  });
  constructor( 
    private dialog:MatDialog,

    private dataService:DataService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  signIn(data: any){
  
    this.dataService.AuthUser(data.value).subscribe(
      result=>{
        if(result){
        this.router.navigateByUrl('/');
        this.dialog.closeAll();
      }
        else
        this.invalidLogin=true;
      }
    );
    
   
  }
  closeDialog(){
    this.dialog.closeAll();
  }
  
  close_popup(){
    this.dialog.closeAll();
  }
}
