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
@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    OrdersComponent,
    AreaComponent
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
    HighchartsChartModule
 ],
 exports:[
  AreaComponent
 ]
})
export class DefaultModule { }
