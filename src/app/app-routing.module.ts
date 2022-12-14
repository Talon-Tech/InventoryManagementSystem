import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddDonationComponent } from './components/donations/add-donation/add-donation.component';
import { LoginComponent } from './components/login/login.component';
import { Example } from './components/donations/view-donation/view-donation.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { AuthGService } from './services/auth-g.service';
import { EditVendorComponent } from './components/edit-vendor/edit-vendor.component';
import { RemoveDonationComponent } from './components/donations/remove-donations/remove-donations/remove-donations.component.ts';
import { CreateDonationComponent } from './components/donations/create-donation/create-donation/create-donation.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-donation',
    component: AddDonationComponent,
    //canActivate:[AuthGService]
  },
  {
    path: 'create-donation',
    component: CreateDonationComponent
  },
  {
    path: 'remove-donation',
    component: RemoveDonationComponent
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
  },
  {
    path: 'edit-vendor/:id',
    component: EditVendorComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
