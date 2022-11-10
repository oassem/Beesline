import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProductsComponent } from './modules/products/products.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { AddProductComponent } from './shared/widgets/add-product/add-product.component';
import { ProductDetailsComponent } from './shared/widgets/product-details/product-details.component';
import { EditProductComponent } from './shared/widgets/edit-product/edit-product.component';
import { ChangeStatusComponent } from './shared/widgets/change-status/change-status.component';
import { EditProfileComponent } from './shared/widgets/edit-profile/edit-profile.component';
import { UsersComponent } from './modules/users/users.component';
import { UserDetailsComponent } from './shared/widgets/user-details/user-details.component';
import { OffersComponent } from './modules/offers/offers.component';
import { AddofferComponent } from './shared/widgets/addoffer/addoffer.component';

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
    {path:'products/addProduct',component:AddProductComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'products/productDetails/:id',component:ProductDetailsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'products/editProduct/:id',component:EditProductComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'orders',component:OrdersComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'orders/changeStatus/:id',component:ChangeStatusComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch: 'full'},
    {path:'editProfile',component:EditProfileComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
    {path:'users',component:UsersComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
    {path:'users/userDetails/:id',component:UserDetailsComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
    {path:'offers',component:OffersComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
    {path:'offers/:id',component:AddofferComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
