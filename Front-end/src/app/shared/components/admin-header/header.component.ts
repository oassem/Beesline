import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      window.dispatchEvent(new Event('resize'));
     },3000);
  }

  toggleSideBar(){
     this.toggleSideBarForMe.emit();
  }
  editProfile(){
    this.router.navigateByUrl('/editProfile');
  }
}
