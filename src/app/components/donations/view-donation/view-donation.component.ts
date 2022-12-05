import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableDataSource } from '@angular/material/table';
import { DonationService } from 'src/app/services/donation.service';
import Donation from 'src/app/models/donation.model';

@Component({
  selector: 'app-view-donation',
  styleUrls: ['view-donation.component.scss'],
  templateUrl: 'view-donation.component.html',
})


export class Example implements OnInit {

constructor(private donationService: DonationService) {
  
}
  
  ELEMENT_DATA: Donation[] = [];
  
  dataSource: any;

  async ngOnInit() {
    this.ELEMENT_DATA = await this.donationService.GetDonations();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  displayedColumns: string[] = ['name', 'vendor', 'program', 'donationDate', 'quantity'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}