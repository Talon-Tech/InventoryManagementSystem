import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';

const routes: Routes = [
  {
    path: 'new',
    component: AddVendorComponent
  }, 
  {
    path: 'view',
    component: ViewVendorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
