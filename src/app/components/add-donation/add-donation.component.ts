import { Component, OnInit } from '@angular/core';

import { v4 as uuidv4} from "uuid";

import donationRepository from 'src/app/repositories/donation.repository';
import Donation from 'src/app/models/donation.model';
import { SAFEProgram } from 'src/app/models/SAFEProgram.type';
import SAFEProgramsReadable from 'src/app/models/SAFEProgramsReadable.model';
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

  public name?: string;
  public donator?: string;
  public program?: SAFEProgram;
  public quantity?: number;
  public programs: Array<string> = SAFEProgramsReadable;

  validateDonation = ():boolean => {
    return this.name && this.donator && this.program && this.quantity ? false : true;
  }

  public addDonation = ():boolean => {
    let errors = this.validateDonation();

    if (errors) {
      return false;
    }

    if (this.program === "Period Program") {
      try {
        for(let i = 0; i < this.quantity!; i++) {
          
          periodProgram.push({
            id: uuidv4(),
            name: this.name!,
            donator: this.donator!,
            program: this.program!,
          });

        }
        
        console.log("It worked!")

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    }

    if (this.program === "Food Pantry") {
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

    if (this.program === "College Readiness") {
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

    if (this.program === "Diaper Program") {
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
