import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestHouseListComponent } from './components/guest-house-list/guest-house-list.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RoomViewComponent } from './components/room-view/room-view.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestHouseListComponent,
    PricingComponent,
    RoomViewComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
