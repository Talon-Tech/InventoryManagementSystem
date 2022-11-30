import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import SAFEProgramsReadable from 'src/app/models/SAFEProgramsReadable.model';
import Vendor from 'src/app/models/vendor.model';

import { VendorsvcService } from 'src/app/services/vendorsvc.service';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.scss']
})
export class CreateDonationComponent implements OnInit {

  vendors!: Vendor[];
  programs!: any[];

  validationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private venderSvc: VendorsvcService) {
    this.vendors = venderSvc.GetVendors();
    this.programs = SAFEProgramsReadable;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.validationForm = this.formBuilder.group({
      name: '',
      vendor: '',
      program: '',
    })
  }

  onSubmit(): void {

  }

}
