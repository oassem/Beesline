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

const routes: Routes = [
  { path: 'products', component: ProductsComponent, title: 'Products', pathMatch: 'full' },
  { path: 'products/:name', component: ProductFilterComponent, title: 'Filtered Products', pathMatch: 'full' },
  { path: '', component: OffersComponent, title: 'Home', pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailsComponent, title: 'Product Details', pathMatch: 'full' },
  { path: 'cart', component: CartComponent, title: 'My Cart', pathMatch: 'full' },
  { path: 'signUp', component: SignUpComponent, pathMatch: 'full' },
  { path: 'login', component: SignInComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, title: 'about' , pathMatch: 'full'},
  { path: 'checkout', component: CheckoutComponent, title: 'CheckOut', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, title: 'My Profile', pathMatch: 'full' },
  { path: 'edit-profile/:id', component: EditProfileComponent, title: 'Edit Profile', pathMatch: 'full' },
  { path: 'orders', component: ordersComponent, title: 'My Orders', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
