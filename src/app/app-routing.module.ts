import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDonationComponent } from './components/add-donation/add-donation.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
