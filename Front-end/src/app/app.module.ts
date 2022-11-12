import { NgModule } from '@angular/core';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AboutComponent } from './Components/about/about.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ordersComponent } from './Components/orders/orders.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './Services/data.service';
import { ProductsComponent } from './Components/products/products.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    AboutComponent,
    ProfileComponent,
    ordersComponent,
    EditProfileComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    ProductsComponent,
    OffersComponent,
    ProductDetailsComponent,
    CartComponent,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [SignInComponent],
})
export class AppModule {}
