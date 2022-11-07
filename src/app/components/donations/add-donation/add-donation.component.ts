import { Component, OnInit } from '@angular/core';

import { v4 as uuidv4 } from "uuid";

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

  validateDonation = (): boolean => {
    return this.name && this.donator && this.program && this.quantity ? false : true;
  }

  public addDonation = (): boolean => {
    let errors = this.validateDonation();

    if (errors) {
      return false;
    }

    if (this.program === "Period Program") {

      //find item
      let foundItem = periodProgram.find(item => item.name === this.name);

      try {
        if (foundItem) {
          periodProgram.splice(periodProgram.indexOf(foundItem), 1, {
            id: foundItem.id,
            name: foundItem.name,
            donator: foundItem.donator,
            program: foundItem.program,
            quantity: foundItem.quantity + this.quantity!
          })
          return true;
        }

        periodProgram.push({
          id: uuidv4(),
          name: this.name!,
          donator: this.donator!,
          program: this.program!,
          quantity: this.quantity!
        });

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    }

    if (this.program === "Food Pantry") {

      //find item
      let foundItem = foodPantry.find(item => item.name === this.name);

      try {
        if (foundItem) {
          foodPantry.splice(foodPantry.indexOf(foundItem), 1, {
            id: foundItem.id,
            name: foundItem.name,
            donator: foundItem.donator,
            program: foundItem.program,
            quantity: foundItem.quantity + this.quantity!
          })
          return true;
        }

        foodPantry.push({
          id: uuidv4(),
          name: this.name!,
          donator: this.donator!,
          program: this.program!,
          quantity: this.quantity!
        });

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    }

    if (this.program === "College Readiness") {
      //find item
      let foundItem = collegeReadiness.find(item => item.name === this.name);

      try {
        if (foundItem) {
          collegeReadiness.splice(collegeReadiness.indexOf(foundItem), 1, {
            id: foundItem.id,
            name: foundItem.name,
            donator: foundItem.donator,
            program: foundItem.program,
            quantity: foundItem.quantity + this.quantity!
          })
          return true;
        }

        collegeReadiness.push({
          id: uuidv4(),
          name: this.name!,
          donator: this.donator!,
          program: this.program!,
          quantity: this.quantity!
        });

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    }

    if (this.program === "Diaper Program") {
      let foundItem = diaperProgram.find(item => item.name === this.name);

      try {
        if (foundItem) {
          diaperProgram.splice(diaperProgram.indexOf(foundItem), 1, {
            id: foundItem.id,
            name: foundItem.name,
            donator: foundItem.donator,
            program: foundItem.program,
            quantity: foundItem.quantity + this.quantity!
          })
          return true;
        }

        diaperProgram.push({
          id: uuidv4(),
          name: this.name!,
          donator: this.donator!,
          program: this.program!,
          quantity: this.quantity!
        });

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