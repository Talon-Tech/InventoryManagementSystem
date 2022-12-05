import {Component, AfterViewInit, OnInit} from '@angular/core';

import { VendorsvcService } from 'src/app/services/vendorsvc.service';
import { DbService } from 'src/app/services/db.service';
import {collection, onSnapshot, query} from "firebase/firestore";
import Vendor from "../../models/vendor.model";

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.scss']
})

export class ViewVendorsComponent implements AfterViewInit, OnInit {
  dbRef = this.dbSvc.getDb();

  displayedColumns: string[] = ['id', 'name', 'contactFirst', 'contactLast', 'contactPhone', 'editIcon', 'deleteIcon'];
  // dataSource!: any;

  /**
   * enforced Vendor interface type since we know what the
   * document data looks like (remember, documents in document storage
   * DO NOT have an enforced shape/type - so we need to enforce it
    */
  dataSource: Vendor[] = [];

  constructor(private vendorSvc: VendorsvcService, private dbSvc: DbService) { }

  /**
   * introduced ngOnInit as a 'coordinator' function
   *
   * we need to set up the 'reactivity' loop:
   * - information changes in the document storage
   * - a snapshot of current data state is taken
   * - `onSnapshot` lets us choose how we react to it
   * - snapshot has a picture of all `docs`
   * - we take the docs, enforce type of Vendor
   * - set the class variable `dataSource` to those transformed results
   *
   * thanks to firestore - this happens every time there is a change
   * to the data in the document storage
   *
   * NOTE: with `queries`, we confine what we 'listen' to, to a specific
   * colleciton, in this case, the `vendors` collection
   * so we're not polling on other data that isn't relevant
   */


  ngOnInit() {
    const q = query(collection(this.dbRef, "vendors"));

    onSnapshot(q, (snapshot) => {
      // pulls the value of the docs property and assigns it into a new variable called docs
      const { docs } = snapshot

      /**
       * we enforce the type of Vendor from the data given back from `.data()`
       * note: this is only known because we push UP data that conforms to type Vendor
       */
      const vendors = docs.map(doc => {
        return doc.data() as Vendor
      });

      /**
       * this is the only place datasource needs to be updated
       * if the end consumer only needs to show the most current state of vendors
       */
      this.dataSource = vendors;
    })
  }

  async ngAfterViewInit() {
    /**
     * commented out previous `imperative` method of going and getting vendor data
     * in favor of the 'reactive' set up done in the new `ngOnInit`
     */
    // let vendorCollection = await this.vendorSvc.GetVendors();
    // this.dataSource = vendorCollection;

    // let vendorCollection = await this.vendorSvc.getVendorsObs();
    // this.dataSource = vendorCollection;

    console.log(this.dataSource);
  }

  async addVendor() {
    await this.vendorSvc.addVendorTest();
  }

  async delete(id: any) {
    let result = confirm("Are you sure you want to delete?");
    if (result) {
      await this.vendorSvc.DeleteVendor(id);
      // window.location.reload();
    }
  }
}

