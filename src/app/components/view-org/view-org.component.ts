import { Component, OnInit } from '@angular/core';

import orgArray from '../../repositories/orgs.repositories';
import Organization from 'src/app/models/org.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Organization[] = orgArray;

@Component({
  selector: 'app-view-org',
  templateUrl: './view-org.component.html',
  styleUrls: ['./view-org.component.scss']
})
export class ViewOrgComponent implements OnInit {

  displayedColumns: string[] = ['id', 'orgName', 'orgContactFirstName', 'orgContactLastName', 'orgContactPhone'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void { }

}
