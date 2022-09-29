import { Component } from '@angular/core';
import foodPantry from './repositories/foodPantry.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InventoryManagementSystem';
  foodPantry = foodPantry;
}
