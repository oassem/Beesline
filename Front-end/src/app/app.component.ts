import { LocationStrategy } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Beesline';
  AdminHere:any;
  constructor(private router:ActivatedRoute,private url:LocationStrategy){
      // if(localStorage.getItem('userId')=='1'){
      //   console.log(this.router.toString());
      //  if(this.router.toString().includes('dashboard')){
      //          this.AdminHere=true;
      //          console.log(this.router.toString());
      //          console.log(this.AdminHere);
      //     }
      // }
  }
  ngOnInit(){
    if(localStorage.getItem('userId')=='1'){
             this.AdminHere=1;     
    }  

   
    
    // if (this.router.outlet.includes('/dashboard') > -1) {
    //   this.active = 0;
    // }
  }
 
}
