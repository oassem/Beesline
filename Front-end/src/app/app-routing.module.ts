import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { ordersComponent } from './Components/orders/orders.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { CartComponent } from './Components/cart/cart.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { ProductsComponent } from './Components/products/products.component';
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
import { IsLoggedGuard } from './guards/is-logged.guard';
import { IsnotLoggedGuard } from './guards/isnot-logged.guard';
import { ContactComponent } from './Components/contact/contact.component';
import { MessagesComponent } from './modules/messages/messages.component';

const routes: Routes = [
  { path: '', component: OffersComponent, title: 'Home', pathMatch: 'full' },
  {path:'products',component:ProductsComponent,title:'Products',pathMatch:'full'},
  { path: 'products/:name', component: ProductFilterComponent, title: 'Filtered Products', pathMatch: 'full' },
  { path: 'offers', component: OffersComponent, title: 'Home', pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailsComponent, title: 'Product Details', pathMatch: 'full' },
  { path: 'cart', component: CartComponent, title: 'My Cart', pathMatch: 'full', canActivate: [IsnotLoggedGuard] },
  { path: 'signUp', component: SignUpComponent, title: 'Sign up', pathMatch: 'full', canActivate: [IsLoggedGuard] },
  { path: 'login', component: SignInComponent, title: 'Sign in', pathMatch: 'full', canActivate: [IsLoggedGuard] },
  { path: 'about', component: AboutComponent, title: 'About us', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, title: 'Contact us', pathMatch: 'full' },
  { path: 'checkout', component: CheckoutComponent, title: 'Checkout', pathMatch: 'full', canActivate: [IsnotLoggedGuard] },
  { path: 'profile', component: ProfileComponent, title: 'My Profile', pathMatch: 'full', canActivate: [IsnotLoggedGuard] },
  { path: 'edit-profile/:id', component: EditProfileComponent, title: 'Edit Profile', pathMatch: 'full', canActivate: [IsnotLoggedGuard] },
  { path: 'orders', component: ordersComponent, title: 'My Orders', pathMatch: 'full', canActivate: [IsnotLoggedGuard] },
  {
    path: 'dashboard', component: DefaultComponent, canActivate: [IsnotLoggedGuard],
    children: [
      { path: 'home', component: DashboardComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'products', component: AdminProductsComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'products/addProduct', component: AddProductComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'products/productDetails/:id', component: AdminProductDetailsComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'products/editProduct/:id', component: EditProductComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'orders', component: AdminOrdersComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'orders/changeStatus/:id', component: ChangeStatusComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'editProfile', component: AdminEditProfileComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'users', component: UsersComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'users/userDetails/:id', component: UserDetailsComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'offers', component: AdminOffersComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      { path: 'offers/:id', component: AddofferComponent, loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule), pathMatch: 'full' },
      {path:'messages',component:MessagesComponent,loadChildren:()=>import('./layouts/default/default.module').then(m=>m.DefaultModule),pathMatch:'full'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
