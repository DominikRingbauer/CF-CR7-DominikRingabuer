import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TravelsDetailsComponent } from './travels-details/travels-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    TravelsComponent,
    CartComponent,
    NavbarComponent,
    TravelsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
