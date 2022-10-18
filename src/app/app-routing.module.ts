import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProductsComponent } from './modules/products/products.component';
import { OrdersComponent } from './modules/orders/orders.component';

const routes: Routes = [
  { path:'',component:DefaultComponent,
  children:[
    {path:'',component:DashboardComponent,loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule)},
    {path:'products',component:ProductsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule)},
    {path:'orders',component:OrdersComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
