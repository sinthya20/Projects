import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsdetailsComponent } from './cardsdetails/cardsdetails.component';
import { CardsComponent } from './cards/cards.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SweetshopComponent } from './sweetshop/sweetshop.component';
import { OrderComponent } from './order/order.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'order',component:OrderComponent
  },
  {
    path:'faq',component:FaqComponent
  },
  { path: 'contact', component: ContactusComponent },
  {
    path:'contactus',component:ContactusComponent
  },
  { path: 'profile', component: ProfileComponent },
  {
    path:'sweetshop',component:SweetshopComponent
  },
  {
    path:'sweetshop1',component:SweetshopComponent
  },
  {
    path:'sweetshop2',component:SweetshopComponent
  },
  {
    path:'card/:id',component:CardsdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
