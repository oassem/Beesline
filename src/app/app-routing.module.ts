import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, title: 'Products' },
  { path: 'products_filter/:name', component: ProductsComponent, title: 'Products' },
  { path: '', component: OffersComponent, title: 'Home' },
  { path: 'products/:id', component: ProductDetailsComponent, title: 'Product Details' },
  { path: 'cart', component: CartComponent, title: 'My Cart' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
