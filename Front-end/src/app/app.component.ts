import { Component, OnInit ,Injectable} from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Beesline';
  AdminHere: any;

  constructor(private router:ActivatedRoute,private loader: NgxUiLoaderService){
      // if(localStorage.getItem('userId')=='1'){
      //   console.log(this.router.toString());
      //  if(this.router.toString().includes('dashboard')){
      //          this.AdminHere=true;
      //          console.log(this.router.toString());
      //          console.log(this.AdminHere);
      //     }
      // }
  }
  userData:any;
  UserType:any;
  ngOnInit(){
    this.loader.start();
    setTimeout(() => {
      this.loader.stop();
    }, 1000);
    this.userData=localStorage.getItem('userData');
    this.userData=JSON.parse(this.userData);
    this.UserType=this.userData.data.type;
    if(this.UserType=='admin'){
         this.AdminHere=1;     
    }  

   

}
}
