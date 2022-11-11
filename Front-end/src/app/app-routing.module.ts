import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { ordersComponent } from './Components/orders/orders.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'checkout', component: CheckoutComponent, title: 'CheckOut' },
  { path: 'profile', component: ProfileComponent, title: 'My Profile' },
  { path: 'edit-profile/:id', component: EditProfileComponent, title: 'Edit Profile' },
  { path: 'orders/:id', component: ordersComponent, title: 'My Orders' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
