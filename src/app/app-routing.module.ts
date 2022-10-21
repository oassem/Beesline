import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProductsComponent } from './modules/products/products.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { AddProductComponent } from './shared/widgets/add-product/add-product.component';
import { ProductDetailsComponent } from './shared/widgets/product-details/product-details.component';
import { EditProductComponent } from './shared/widgets/edit-product/edit-product.component';
import { OrderDetailsComponent } from './shared/widgets/order-details/order-details.component';
import { ChangeStatusComponent } from './shared/widgets/change-status/change-status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path:'',component:DefaultComponent,
  children:[
    {path:'dashboard',component:DashboardComponent,loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule),pathMatch: 'full'},
    {path:'products',component:ProductsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'products:?data',component:ProductsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
  
    {path:'products/addProduct',component:AddProductComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'products/productDetails',component:ProductDetailsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'products/editProduct',component:EditProductComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'orders',component:OrdersComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'orders/orderDetails',component:OrderDetailsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'orders/changeStatus',component:ChangeStatusComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
