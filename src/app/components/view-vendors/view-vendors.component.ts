import { Component, OnInit } from '@angular/core';
import { query, collection, onSnapshot } from 'firebase/firestore';

import Vendor from 'src/app/models/vendor.model';
import { VendorsvcService } from 'src/app/services/vendorsvc.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.scss']
})

export class ViewVendorsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'contactFirst', 'contactLast', 'contactPhone', 'editIcon', 'deleteIcon'];
  dataSource: Vendor[] = [];
  dbRef = this.dbSvc.getDb();

  constructor(private vendorSvc: VendorsvcService, private dbSvc: DbService) { }

  ngOnInit(): void {
    const q = query(collection(this.dbRef, "vendors"));

    onSnapshot(q, (snapshot) => {
      // pulls the value of the docs property and assigns it into a new variable called docs
      const { docs } = snapshot

      const vendors = docs.map(doc => {
        return doc.data() as Vendor
      });

      this.dataSource = vendors;
    })
  }

  async addVendor() {
    this.vendorSvc.addVendorTest();
  }

  async delete(id: any) {
    let result = confirm("Are you sure you want to delete?");
    if (result) {
      await this.vendorSvc.DeleteVendor(id);
      // window.location.reload();
    }
  }
}

