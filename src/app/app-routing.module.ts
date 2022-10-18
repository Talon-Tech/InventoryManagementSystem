import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDonationComponent } from './components/add-donation/add-donation.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'add-donation',
    component: AddDonationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
