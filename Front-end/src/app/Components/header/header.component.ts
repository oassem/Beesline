import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private dialog:MatDialog) {
    
   }
 
  ngOnInit(): void {
  }
  signIn(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width="600px";
    dialogConfig.height="600px";
    
    
    this.dialog.open(SignInComponent,dialogConfig );
  }
}
