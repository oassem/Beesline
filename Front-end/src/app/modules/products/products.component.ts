import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute,private dashboardservice:DashboardService) {}
   ngOnInit(): void {}

}