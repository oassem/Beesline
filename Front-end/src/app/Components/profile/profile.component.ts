import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/services/apiservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  info: any;


  constructor(public myService: APIServiceService) { }

  ngOnInit(): void {
    this.myService.getUserInfo(Number(localStorage.getItem('userId'))).subscribe({
      next: (data) => {
        this.info = data;
        console.log(this.info.data.id);
      },
      error: (err) => console.error(err),
    });
  }

}
