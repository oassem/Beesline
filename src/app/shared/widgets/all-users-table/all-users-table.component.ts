import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  Number: number;
  UserName: string;
  Type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Number: 1, name: 'Laila', UserName:'laila910', Type: 'Super Admin'},
  {Number: 2, name: 'Ahmed', UserName: 'ahmed232', Type: 'Customer'},
  {Number: 3, name: 'Omar', UserName: 'omar56', Type: 'admin'},
  {Number: 4, name: 'Amgad', UserName:'amgad56', Type: 'Customer'},
  {Number: 5, name: 'Mostafe', UserName: 'mostafa47', Type: 'admin'},
  {Number: 6, name: 'Noha', UserName: 'noha890', Type: 'admin'},
  {Number: 7, name: 'Salma', UserName: 'salma987', Type: 'Customer'},
  {Number: 8, name: 'Madlin', UserName: 'madlin32', Type: 'Customer'},
  {Number: 9, name: 'Warda', UserName: 'warda54', Type: 'Customer'},
  {Number: 10, name: 'Hoda', UserName: 'hoda32', Type: 'Customer'},
];
@Component({
  selector: 'app-widget-all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.css']
})
export class AllUsersTableComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }



}
