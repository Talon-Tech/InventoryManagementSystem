import { Component, OnInit } from '@angular/core';

import Vendor from 'src/app/models/vendor.model';
import vendorArr from 'src/app/repositories/vendor.repository';

const ELEMENT_DATA: Vendor[] = vendorArr;

@Component({
  selector: 'app-view-vendors',
  templateUrl: './view-vendors.component.html',
  styleUrls: ['./view-vendors.component.scss']
})
export class ViewVendorsComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'contactFirst', 'contactLast', 'contactPhone', 'editIcon'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
