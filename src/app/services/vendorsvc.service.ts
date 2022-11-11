import { Injectable } from '@angular/core';

import Vendor from 'src/app/models/vendor.model';
import vendorArr from 'src/app/repositories/vendor.repository';

@Injectable({
  providedIn: 'root'
})
export class VendorsvcService {

  constructor() { }

  GetVendor(id:any) {
    let vendor = vendorArr.find(x => x.id == id);
    return vendor; 
  }

  UpdateVendor(vendor:Vendor) {
    let currentVendor = this.GetVendor(vendor.id); 
    currentVendor!.contactFirst = vendor.contactFirst;     
  }


}
