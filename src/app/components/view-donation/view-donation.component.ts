import {Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Donations {
  itemName: string;
  donor: string;
  program: string;
  donationDate: string;
  numOfItem: number;
}

const ELEMENT_DATA: Donations[] = [
  {itemName: 'Canned Black Beans', donor: 'Publix', program: 'FOOD_PANTRY', donationDate: '9/01/2022', numOfItem: 20},
  {itemName: 'Always Maxi Pads Overnight Absorbency Unscented without Wings', donor: 'Target', program: "PERIOD_PROGRAM", donationDate: '08/17/2022', numOfItem: 50},
  {itemName: 'Sassy Disposable Diaper Bags', donor: 'Walmart', program: 'DIAPER_DRIVE', donationDate: '9/16/2022', numOfItem: 30},
  {itemName: "Parent's Choice Fragrance Free Baby Wipes", donor: 'Walmart', program: 'DIAPER_DRIVE', donationDate: '9/16/2022', numOfItem: 25},
  {itemName: 'Tampax Pearl Ultra Tampons', donor: 'Target', program: 'PERIOD_PROGRAM', donationDate: '08/17/2022', numOfItem: 50},
  {itemName: 'French Baguette Loaf', donor: 'Panera', program: "FOOD_PANTRY", donationDate: '9/30/2022', numOfItem: 15},
  {itemName: 'Plain Bagel', donor: 'Panera', program: "FOOD_PANTRY", donationDate: '9/30/2022', numOfItem: 20},
  {itemName: 'Classic Sourdough Loaf', donor: 'Panera', program: 'FOOD_PANTRY', donationDate: '9/30/2022', numOfItem: 20},
  {itemName: 'AZO Complete Feminine Balance', donor: 'Target', program: "PERIOD_PROGRAM", donationDate: '9/20/2022', numOfItem: 40},
  {itemName: 'Gala Apples', donor: 'Publix', program: 'FOOD_PANTRY', donationDate: '9/30/2022', numOfItem: 45},
];

@Component({
  selector: 'app-view-donation',
  styleUrls: ['view-donation.component.scss'],
  templateUrl: 'view-donation.component.html',
})


export class Example {
  displayedColumns: string[] = ['itemName', 'donor', 'program', 'donationDate', 'numOfItem'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: String){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}