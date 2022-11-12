import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AddProductComponent } from './shared/widgets/add-product/add-product.component';
import { EditProductComponent } from './shared/widgets/edit-product/edit-product.component';
import { ChangeStatusComponent } from './shared/widgets/change-status/change-status.component';
import { UsersComponent } from './modules/users/users.component';
import { UserDetailsComponent } from './shared/widgets/user-details/user-details.component';
import { AddofferComponent } from './shared/widgets/addoffer/addoffer.component';
import { AdminProductsComponent } from './modules/admin-products/admin-products.component';
import { AdminOrdersComponent } from './modules/admin-orders/admin-orders.component';
import { AdminEditProfileComponent } from './shared/widgets/admin-edit-profile/admin-edit-profile.component';
import { AdminOffersComponent } from './modules/admin-offers/admin-offers.component';
import { AdminProductDetailsComponent } from './shared/widgets/admin-product-details/admin-product-details.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  { path:'dashboard',component:DefaultComponent,
  children:[
    {path:'home',component:DashboardComponent,loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule),pathMatch: 'full'},
    {path:'products',component:AdminProductsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'products/addProduct',component:AddProductComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'products/productDetails/:id',component:AdminProductDetailsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'products/editProduct/:id',component:EditProductComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'orders',component:AdminOrdersComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'orders/changeStatus/:id',component:ChangeStatusComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'editProfile',component:AdminEditProfileComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
    {path:'users',component:UsersComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
    {path:'users/userDetails/:id',component:UserDetailsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
    {path:'offers',component:AdminOffersComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
    {path:'offers/:id',component:AddofferComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
