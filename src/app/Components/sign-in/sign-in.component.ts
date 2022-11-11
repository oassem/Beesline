import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialog.closeAll();
  }
}
