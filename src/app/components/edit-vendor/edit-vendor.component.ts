import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import Vendor from '../../models/vendor.model'
import vendorArr from '../../repositories/vendor.repository';
import { VendorsvcService } from '../../services/vendorsvc.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {

  public vendorForm!: FormGroup;
  vendorId: number | null | undefined;
  vendor = <Vendor>{};
  error = false;
  errorMsg = '';

  constructor(private activatedRoute: ActivatedRoute, private vendorSvc: VendorsvcService, private formBuilder: FormBuilder) {

    this.activatedRoute.params.subscribe((p) => {
      this.vendorId = p['id'];
      console.log(this.vendorId);
    });

    this.vendor = this.vendorSvc.GetVendor(this.vendorId)!;

    // Create FormGroup
    this.vendorForm = this.formBuilder.group({
      "name": [""],
      "contactFirst": [""],
      "contactLast": [""],
      "contactPhone": [""],
    })

    // Set Values
    this.vendorForm.controls["name"].setValue(this.vendor.name);
    this.vendorForm.controls["contactFirst"].setValue(this.vendor.contactFirst);
    this.vendorForm.controls["contactLast"].setValue(this.vendor.contactLast);
    this.vendorForm.controls["contactPhone"].setValue(this.vendor.contactPhone);

    this.onChanges();
  }

  ngOnInit(): void { }

  onChanges() {
    this.vendorForm!.valueChanges.subscribe(val => {
      this.vendor.name = val.name!;
      this.vendor.contactFirst = val.contactFirst!;
      this.vendor.contactLast = val.contactLast!;
      this.vendor.contactPhone = val.contactPhone!;
    });
  }

  onSubmit() {
    console.log(this.vendor);
    try {
      this.vendorSvc.UpdateVendor(this.vendor);
      console.log("success");
    } catch {
      console.log("failure");
    }
  }
}
