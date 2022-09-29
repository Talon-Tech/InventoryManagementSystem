import {Component} from '@angular/core';

export interface Donations {
  itemName: string;
  donor: string;
  program: string;
  donationDate: string;
}

const ELEMENT_DATA: Donations[] = [
  {itemName: 'Canned Black Beans', donor: 'Publix', program: 'FOOD_PANTRY', donationDate: '9/01/2022'},
  {itemName: 'Always Maxi Pads Overnight Absorbency Unscented without Wings', donor: 'Target', program: "PERIOD_PROGRAM", donationDate: '08/17/2022'},
  {itemName: 'Sassy Disposable Diaper Bags', donor: 'Walmart', program: 'DIAPER_DRIVE', donationDate: '9/16/2022'},
  {itemName: "Parent's Choice Fragrance Free Baby Wipes", donor: 'Walmart', program: 'DIAPER_DRIVE', donationDate: '9/16/2022'},
  {itemName: 'Tampax Pearl Ultra Tampons', donor: 'Target', program: 'PERIOD_PROGRAM', donationDate: '08/17/2022'},
  {itemName: 'French Baguette Loaf', donor: 'Panera', program: "FOOD_PANTRY", donationDate: '9/30/2022'},
  {itemName: 'Plain Bagel', donor: 'Panera', program: "FOOD_PANTRY", donationDate: '9/30/2022'},
  {itemName: 'Classic Sourdough Loaf', donor: 'Panera', program: 'FOOD_PANTRY', donationDate: '9/30/2022'},
  {itemName: 'AZO Complete Feminine Balance', donor: 'Target', program: "PERIOD_PROGRAM", donationDate: '9/20/2022'},
  {itemName: 'Gala Apples', donor: 'Publix', program: 'FOOD_PANTRY', donationDate: '9/30/2022'},
];

@Component({
  selector: 'app-view-donation',
  styleUrls: ['view-donation.component.scss'],
  templateUrl: 'view-donation.component.html',
})


export class Example {
  displayedColumns: string[] = ['itemName', 'donor', 'program', 'donationDate'];
  dataSource = ELEMENT_DATA;
}