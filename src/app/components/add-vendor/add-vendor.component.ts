import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import Vendor from '../../models/vendor.model'
import { VendorsvcService } from 'src/app/services/vendorsvc.service';


@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
  vendor = <Vendor>{};
  error = false;
  errorMsg = "Please complete the required information";

  vendorForm = new FormGroup({
    name: new FormControl(''),
    contactFirst: new FormControl('', Validators.required),
    contactLast: new FormControl('', Validators.required),
    contactPhone: new FormControl('', Validators.required),
  })

  constructor(private vendorSvc: VendorsvcService) {
    this.onChanges();
  }

  ngOnInit(): void {
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
    if (this.vendor.name == undefined || this.vendor.contactFirst == undefined || this.vendor.contactLast == undefined || this.vendor.contactPhone == undefined) {
      this.error = true;
      alert(this.errorMsg);
    } else {
      this.vendorSvc.AddVendor(this.vendor);
      alert(this.vendor.name + " has been added as a vendor!")
      // this.vendorForm.reset();
    }
  }
}
