import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDonationComponent } from './components/donations/add-donation/add-donation.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { Example } from './components/donations/view-donation/view-donation.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { EditVendorComponent } from './components/edit-vendor/edit-vendor.component';
import { RemoveDonationComponent } from './components/donations/remove-donations/remove-donations/remove-donations.component.ts';
import { MatListModule } from '@angular/material/list';
import { ToolBarWSideNavComponent } from './components/tool-bar-w-side-nav/tool-bar-w-side-nav.component';
import { CreateDonationComponent } from './components/donations/create-donation/create-donation/create-donation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDonationComponent,
    LoginComponent,
    Example,
    AddVendorComponent,
    ViewVendorsComponent,
    RemoveDonationComponent,
    ToolBarWSideNavComponent,
    EditVendorComponent,
    CreateDonationComponent
  ],
  exports: [
    MatGridListModule,
    MatStepperModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule
  ],
  imports: [
    MatGridListModule,
    MatPaginatorModule,
    MatStepperModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class donationExample { }
