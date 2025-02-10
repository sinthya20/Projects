import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { CardsdetailsComponent } from './cardsdetails/cardsdetails.component';
import {HttpClientModule} from '@angular/common/http';
import { SubcardsComponent } from './subcards/subcards.component';
import { FaqComponent } from './faq/faq.component';
import { SliderComponent } from './slider/slider.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SweetshopComponent } from './sweetshop/sweetshop.component';
import { Sweetshop1Component } from './sweetshop1/sweetshop1.component';
import { Sweetshop2Component } from './sweetshop2/sweetshop2.component';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    BannerComponent,
    CardsComponent,
    FooterComponent,
    CardsdetailsComponent,
    SubcardsComponent,
    FaqComponent,
    SliderComponent,
    ContactusComponent,
    SweetshopComponent,
    Sweetshop1Component,
    Sweetshop2Component,
    OrderComponent,
    ProfileComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
