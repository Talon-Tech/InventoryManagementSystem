import { Component } from '@angular/core';
import collegeReadiness from './repositories/collegeReadiness.repository';
import diaperProgram from './repositories/diaperProgram.repository';
import periodProgram from './repositories/periodProgam.repository';
import foodPantry from './repositories/foodPantry.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InventoryManagementSystem';
  foodPantry = foodPantry;
  periodProgram = periodProgram;
  diaperProgram = diaperProgram;
  collegeReadiness = collegeReadiness;
}
