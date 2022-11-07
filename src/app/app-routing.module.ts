import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddDonationComponent } from './components/add-donation/add-donation.component';
import { LoginComponent } from './components/login/login.component';
import { Example } from './components/view-donation/view-donation.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-donation',
    component: AddDonationComponent
  },
  {
    path: 'view-donations',
    component: Example
  },
  {
    path: 'new-vendor',
    component: AddVendorComponent
  }, 
  {
    path: 'view-vendors',
    component: ViewVendorsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
