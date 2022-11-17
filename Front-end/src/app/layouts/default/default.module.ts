import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from '../../app-routing.module';

import {MatDividerModule} from '@angular/material/divider';

import { MatSidenavModule } from '@angular/material/sidenav';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { AreaComponent } from '../../shared/widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from '../../shared/widgets/card/card.component';
import { PieComponent } from '../../shared/widgets/pie/pie.component';
// import { DashboardService } from '../../modules/dashboard.service';
import{MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AllUsersTableComponent } from '../../shared/widgets/all-users-table/all-users-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import { PrdouctsTableComponent } from '../../shared/widgets/prdoucts-table/prdoucts-table.component';
import { AddProductComponent } from '../../shared/widgets/add-product/add-product.component';
import { OrdersTableComponent } from '../../shared/widgets/orders-table/orders-table.component';
import { ReactiveFormsModule } from '@angular/forms';  
import { EditProductComponent } from '../../shared/widgets/edit-product/edit-product.component';
import { ChangeStatusComponent } from '../../shared/widgets/change-status/change-status.component';
import { MatSelectModule} from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
// import { SidebarComponent } from '../../shared/components/admin-sidebar/sidebar.component';
import { DashboardService } from '../../modules/dashboard.service';

// import { MatTabsModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { UserDetailsComponent } from 'src/app/shared/widgets/user-details/user-details.component';
import { AddofferComponent } from 'src/app/shared/widgets/addoffer/addoffer.component';
import { AdminProductsComponent } from 'src/app/modules/admin-products/admin-products.component';
import { AdminOrdersComponent } from 'src/app/modules/admin-orders/admin-orders.component';
import { AdminEditProfileComponent } from 'src/app/shared/widgets/admin-edit-profile/admin-edit-profile.component';
import { AdminOffersComponent } from 'src/app/modules/admin-offers/admin-offers.component';
import { AdminProductDetailsComponent } from 'src/app/shared/widgets/admin-product-details/admin-product-details.component';
import { OrdersAcceptedCardComponent } from '../../shared/widgets/orders-accepted-card/orders-accepted-card.component';
import { OrdersRejectedCardComponent } from 'src/app/shared/widgets/orders-rejected-card/orders-rejected-card.component';
import { OrdersPendingCardComponent } from '../../shared/widgets/orders-pending-card/orders-pending-card.component';
import { MessagesComponent } from 'src/app/modules/messages/messages.component';




@NgModule({
  declarations: [
    DashboardComponent,
 AdminOrdersComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    AllUsersTableComponent,
    PrdouctsTableComponent,
    AddProductComponent,
    OrdersTableComponent,
   AdminProductDetailsComponent,
    EditProductComponent,
  ChangeStatusComponent,
 AdminEditProfileComponent,
  UsersComponent,
  UserDetailsComponent,
 AdminOffersComponent,
  AddofferComponent,
  // SidebarComponent
  AdminProductsComponent,
  OrdersAcceptedCardComponent,
  OrdersRejectedCardComponent,
  OrdersPendingCardComponent,
  MessagesComponent
 
  
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    // AppRoutingModule,
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
    ReactiveFormsModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatTabsModule
    
  ],
 exports:[
  AreaComponent,
  CardComponent,
  PieComponent,
  AllUsersTableComponent,
  PrdouctsTableComponent,
  AddProductComponent,
  OrdersTableComponent,
 AdminProductDetailsComponent,
  EditProductComponent,

  ChangeStatusComponent
  // SidebarComponent


 ],
 providers:[
  DashboardService
 ]
})
export class DefaultModule { }
