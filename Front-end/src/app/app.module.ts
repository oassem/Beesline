import { NgModule } from '@angular/core';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AboutComponent } from './Components/about/about.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ordersComponent } from './Components/orders/orders.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { DataService } from './Services/data.service';
import { ProductsComponent } from './Components/products/products.component';
import { OffersComponent } from './Components/offers/offers.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductFilterComponent } from './Components/product-filter/product-filter.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layouts/default/default.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './shared/components/admin-sidebar/sidebar.component';
import { AdminHeaderComponent } from './shared/components/admin-header/admin-header.component';
import { AdminFooterComponent } from './shared/components/admin-footer/admin-footer.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

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
    DefaultComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    SidebarComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  exports: [AdminHeaderComponent, AdminFooterComponent, SidebarComponent],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [SignInComponent]
})
export class AppModule {}
