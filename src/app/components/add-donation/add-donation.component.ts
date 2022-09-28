import { Component, OnInit } from '@angular/core';
import donationRepository from 'src/app/repositories/donation.repository';
import Donation from 'src/app/models/donation.model';
import { v4 as uuidv4} from "uuid";
import { SAFEProgram } from 'src/app/models/SAFEProgram.type';
import foodPantry from 'src/app/repositories/foodPantry.repository';
import periodProgram from 'src/app/repositories/periodProgam.repository';
import collegeReadiness from 'src/app/repositories/collegeReadiness.repository';
import diaperProgram from 'src/app/repositories/diaperProgram.repository';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.scss']
})
export class AddDonationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name?: string;
  donator?: string;
  program?: SAFEProgram;
  quantity?: number;

  validateDonation = ():boolean => {
    return this.name && this.donator && this.program && this.quantity ? true : false;
  }

  addDonation = ():boolean => {
    let errors = this.validateDonation();

    if (errors) {
      return false;
    }

    if (this.program === "PERIOD_PROGRAM") {
      try {
        for(let i = 0; i < this.quantity!; i++) {
          
          periodProgram.push({
            id: uuidv4(),
            name: this.name!,
            donator: this.donator!,
            program: this.program!,
          });

        }
        
        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    }

    if (this.program === "FOOD_PANTRY") {
      try {
        for(let i = 0; i < this.quantity!; i++) {
          
          foodPantry.push({
            id: uuidv4(),
            name: this.name!,
            donator: this.donator!,
            program: this.program!,
          });

        }
        
        return true;
      } catch (error) {
        console.log(error);
        
        return false;
      }
    }

    if (this.program === 'COLLEGE_READINESS') {
      try {
        for(let i = 0; i < this.quantity!; i++) {
          
          collegeReadiness.push({
            id: uuidv4(),
            name: this.name!,
            donator: this.donator!,
            program: this.program!,
          });

        }
        
        return true;
      } catch (error) {
        console.log(error);
        
        return false;
      }
    }

    if (this.program === 'DIAPER_PROGRAM') {
      try {
        for(let i = 0; i < this.quantity!; i++) {
          
          diaperProgram.push({
            id: uuidv4(),
            name: this.name!,
            donator: this.donator!,
            program: this.program!,
          });

        }
        
        return true;
      } catch (error) {
        console.log(error);
        
        return false;
      }
    }

    // something went wrong
    return false;
    
  }


}
