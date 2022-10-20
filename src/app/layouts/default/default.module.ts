import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../../modules/products/products.component';
import { OrdersComponent } from '../../modules/orders/orders.component';
import {MatDividerModule} from '@angular/material/divider';

import { MatSidenavModule } from '@angular/material/sidenav';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { AreaComponent } from 'src/app/shared/widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from '../../shared/widgets/card/card.component';
import { PieComponent } from '../../shared/widgets/pie/pie.component';
import { DashboardService } from '../../modules/dashboard.service';
import{MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AllUsersTableComponent } from '../../shared/widgets/all-users-table/all-users-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import { PrdouctsTableComponent } from 'src/app/shared/widgets/prdoucts-table/prdoucts-table.component';
import { AddProductComponent } from 'src/app/shared/widgets/add-product/add-product.component';
import { OrdersTableComponent } from '../../shared/widgets/orders-table/orders-table.component';
import { ReactiveFormsModule } from '@angular/forms';  
import { ProductDetailsComponent } from '../../shared/widgets/product-details/product-details.component';
import { EditProductComponent } from 'src/app/shared/widgets/edit-product/edit-product.component';
import { OrderDetailsComponent } from '../../shared/widgets/order-details/order-details.component';
import { ChangeStatusComponent } from '../../shared/widgets/change-status/change-status.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    OrdersComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    AllUsersTableComponent,
    PrdouctsTableComponent,
    AddProductComponent,
    OrdersTableComponent,
    ProductDetailsComponent,
    EditProductComponent,
  OrderDetailsComponent,ChangeStatusComponent
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    
    HttpClientModule,
    MatSortModule,
    ReactiveFormsModule
    
  ],
 exports:[
  AreaComponent,
  CardComponent,
  PieComponent,
  AllUsersTableComponent,
  PrdouctsTableComponent,
  AddProductComponent,
  OrdersTableComponent,
  ProductDetailsComponent,
  EditProductComponent,
  OrderDetailsComponent,
  ChangeStatusComponent


 ],
 providers:[
  DashboardService
 ]
})
export class DefaultModule { }
