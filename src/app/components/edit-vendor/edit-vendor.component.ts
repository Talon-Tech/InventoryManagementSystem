import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import Vendor from '../../models/vendor.model'
import { VendorsvcService } from '../../services/vendorsvc.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {

  public vendorForm!: FormGroup;
  vendorId: number | null | undefined;
  vendor = <any>{};
  error = false;
  errorMsg = '';

  constructor(private activatedRoute: ActivatedRoute, private vendorSvc: VendorsvcService, private formBuilder: FormBuilder) {
    // Create FormGroup
    this.vendorForm = this.formBuilder.group({
      "name": [""],
      "contactFirst": [""],
      "contactLast": [""],
      "contactPhone": [""],
    })
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe((p) => {
      this.vendorId = p['id'];
    });

    this.vendor = await this.vendorSvc.GetVendor(this.vendorId);

    // Set Values
    this.vendorForm.controls["name"].setValue(this.vendor.name);
    this.vendorForm.controls["contactFirst"].setValue(this.vendor.contactFirst);
    this.vendorForm.controls["contactLast"].setValue(this.vendor.contactLast);
    this.vendorForm.controls["contactPhone"].setValue(this.vendor.contactPhone);

    this.onChanges();
  }

  onChanges() {
    this.vendorForm!.valueChanges.subscribe(val => {
      this.vendor.name = val.name!;
      this.vendor.contactFirst = val.contactFirst!;
      this.vendor.contactLast = val.contactLast!;
      this.vendor.contactPhone = val.contactPhone!;
    });
  }

  onSubmit() {
    try {
      this.vendorSvc.UpdateVendor(this.vendor);
      console.log("success");
    } catch {
      console.log("failure");
    }
  }
}
