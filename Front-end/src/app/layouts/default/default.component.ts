import { Component, OnInit } from "@angular/core";
// Import this, and write at the top of your .ts file
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sideBarOpen=false;
  constructor() {}
  ngOnInit(): void {}
  sideBarToggle(e:any){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
