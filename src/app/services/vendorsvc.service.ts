import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import Vendor from 'src/app/models/vendor.model';
import vendorArr from 'src/app/repositories/vendor.repository';

@Injectable({
  providedIn: 'root'
})
export class VendorsvcService {

  constructor(private router: Router) { }

  GetVendor(id: any) {
    let vendor = vendorArr.find(x => x.id == id);
    return vendor;
  }

  GetVendors() {
    return vendorArr; 
  }

  UpdateVendor(vendor: Vendor) {
    let currentVendor = this.GetVendor(vendor.id);
    currentVendor!.contactFirst = vendor.contactFirst;
  }

  DeleteVendor(id: any) {
    let index = vendorArr.findIndex(i => i.id === id);
    vendorArr.splice(index, 1);
    // this.router.navigate(['/view-vendors']);
    // this.router.navigate(['/view-vendors'])
    //   .then(() => {
    //     window.location.reload();
    //   });
  }


}
