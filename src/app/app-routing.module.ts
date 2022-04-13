import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestHouseListComponent } from './components/guest-house-list/guest-house-list.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  {path: "guestHouses", component: GuestHouseListComponent},
  {path: "pricingAndRooms", component: PricingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
