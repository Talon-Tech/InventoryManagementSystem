import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from "uuid";

import Vendor from '../../models/vendor.model'
import vendorArr from '../../repositories/vendor.repository';


@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
  error = false;
  errorMsg = "Please complete the required information";

  vendor = <Vendor>{};

  vendorForm = new FormGroup({
    name: new FormControl(''),
    contactFirst: new FormControl('', Validators.required),
    contactLast: new FormControl('', Validators.required),
    contactPhone: new FormControl('', Validators.required),
  })

  constructor() {
    this.onChanges();
  }

  ngOnInit(): void {
  }

  onChanges() {
    this.vendorForm!.valueChanges.subscribe(val => {
      // this.shirt.id = this.afs.createId();
      this.vendor.id = uuidv4();
      this.vendor.name = val.name!;
      this.vendor.contactFirst = val.contactFirst!;
      this.vendor.contactLast = val.contactLast!;
      this.vendor.contactPhone = val.contactPhone!;
    });
  }

  onSubmit() {
    if (this.vendor.name == undefined || this.vendor.contactFirst == undefined || this.vendor.contactLast == undefined || this.vendor.contactPhone == undefined) {
      this.error = true;
      // this.errorMsg = "Please complete the required information";
      alert(this.errorMsg);
    } else {
      vendorArr.push(this.vendor);
      // this.vendorCollection.add(this.vendor);
      // console.log(vendorArr.length)
      console.log(vendorArr);
      alert(this.vendor.name + " has been added as a vendor!")
      // this.vendorForm.reset();
    }
  }
}
