import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

import { VendorsvcService } from 'src/app/services/vendorsvc.service';
import Vendor from 'src/app/models/vendor.model';
import vendorArr from 'src/app/repositories/vendor.repository';

const ELEMENT_DATA: Vendor[] = vendorArr; 

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.scss']
})
export class ViewVendorsComponent {

  displayedColumns: string[] = ['id', 'name', 'contactFirst', 'contactLast', 'contactPhone', 'editIcon', 'deleteIcon'];
  dataToDisplay = [...ELEMENT_DATA];
  dataSource = new ExampleDataSource(this.dataToDisplay);

  constructor(private vendorSvs: VendorsvcService) { }

  delete(id: any) {
    let result = confirm("Are you sure you want to delete?");
    if (result) {
      this.vendorSvs.DeleteVendor(id);
      this.dataToDisplay = vendorArr; 
      this.dataSource.setData(this.dataToDisplay);
    }
  }
}

class ExampleDataSource extends DataSource<Vendor> {
  private _dataStream = new ReplaySubject<Vendor[]>();

  constructor(initialData: Vendor[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Vendor[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Vendor[]) {
    this._dataStream.next(data);
  }
}

