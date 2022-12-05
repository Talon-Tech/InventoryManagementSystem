import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { uuidv4 } from '@firebase/util';
import { DocumentData } from 'firebase/firestore/lite';
import SAFEProgramsReadable from 'src/app/models/SAFEProgramsReadable.model';
import Vendor from 'src/app/models/vendor.model';
import { SAFEProgram } from "src/app/models/SAFEProgram.type"
import { DonationService } from 'src/app/services/donation.service';

import { VendorsvcService } from 'src/app/services/vendorsvc.service';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.scss']
})
export class CreateDonationComponent implements OnInit {


  vendors!: DocumentData[];
  programs!: any[];
  isDonationSelected: boolean = false;

  validationForm = new FormGroup({
    name: new FormControl(''),
    vendor: new FormControl(''),
    program: new FormControl(''),
    quantity: new FormControl(0)
  });

  constructor(private formBuilder: FormBuilder, private vendorSvc: VendorsvcService, private donationService: DonationService) {
    this.programs = SAFEProgramsReadable;
  }

  async ngOnInit(): Promise<void> {
    let vendorCollection = await this.vendorSvc.GetVendors();
    this.vendors = vendorCollection;
  }

  // initializeForm(): void {
  //   this.validationForm = this.formBuilder.group({
  //     name: '',
  //     vendor: '',
  //     program: '',
  //     quantity: 0
  //   })
  // }

  onDonationNameChange = (event: any) => {
    let selectedDonation = event.target.value;
    if (selectedDonation) {
      this.isDonationSelected = true;
    } else {
      this.isDonationSelected = false;
    }
    
  }

  onSubmitAddDonation() {
    let donationToUpload = {
      name: this.validationForm.value.name!,
      quantity: this.validationForm.value.quantity!,
      vendor: this.validationForm.value.vendor!,
      donationDate: new Date().toString(),
      program: this.validationForm.value.program! as SAFEProgram,
      id: uuidv4()
    }
    this.donationService.AddDonation(donationToUpload)
    throw new Error('Method not implemented.');
  }

}
