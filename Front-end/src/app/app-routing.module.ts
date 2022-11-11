import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
