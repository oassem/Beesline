import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layouts/default/default.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/admin-header/header.component';
import { FooterComponent } from './shared/components/admin-footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './shared/components/admin-sidebar/sidebar.component';










@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  MatSidenavModule,
MatDividerModule,
MatToolbarModule,
MatIconModule,
MatButtonModule,
FlexLayoutModule,
MatMenuModule,
MatListModule,
RouterModule,
MatFormFieldModule,
MatTableModule,
MatPaginatorModule,
HttpClientModule


],
exports:[
 HeaderComponent,
 FooterComponent,
 SidebarComponent

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
