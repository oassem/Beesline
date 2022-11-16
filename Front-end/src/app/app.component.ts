import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Beesline';
  AdminHere: any;

  constructor(private loader: NgxUiLoaderService) {}

  ngOnInit() {
    this.loader.start();
    setTimeout(() => {
      this.loader.stop();
    }, 3000);
    if (localStorage.getItem('userId') == '1') {
      this.AdminHere = 1;
    }
  }
}
