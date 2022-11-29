import { Component, AfterViewInit } from '@angular/core';

import { VendorsvcService } from 'src/app/services/vendorsvc.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.scss']
})

export class ViewVendorsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'contactFirst', 'contactLast', 'contactPhone', 'editIcon', 'deleteIcon'];
  dataSource!: any;

  constructor(private vendorSvc: VendorsvcService, private dbSvc: DbService) { }

  async ngAfterViewInit() {
    let vendorCollection = await this.vendorSvc.GetVendors();
    this.dataSource = vendorCollection;
  }

  async delete(id: any) {
    let result = confirm("Are you sure you want to delete?");
    if (result) {
      await this.vendorSvc.DeleteVendor(id);
      window.location.reload();
    }
  }
}

