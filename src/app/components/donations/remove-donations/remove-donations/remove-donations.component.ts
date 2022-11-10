import { Component, OnInit } from '@angular/core';

import { SAFEProgram } from 'src/app/models/SAFEProgram.type';
import SAFEProgramsReadable from 'src/app/models/SAFEProgramsReadable.model';

import donationRepository from 'src/app/repositories/donation.repository';
import collegeReadiness from 'src/app/repositories/collegeReadiness.repository';
import diaperProgram from 'src/app/repositories/diaperProgram.repository';
import foodPantry from 'src/app/repositories/foodPantry.repository';
import periodProgram from 'src/app/repositories/periodProgam.repository';
import vendorArr from 'src/app/repositories/vendor.repository';
import Vendor from 'src/app/models/vendor.model';
import Donation from 'src/app/models/donation.model';

@Component({
  selector: 'app-remove-donations',
  templateUrl: './remove-donations.component.html',
  styleUrls: ['../../donations.scss']
})
export class RemoveDonationsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public name?: string;
  public donator?: string;
  public vendors?: Array<Vendor> = vendorArr;
  public program?: SAFEProgram;
  public quantity?: number;
  public programs: Array<string> = SAFEProgramsReadable;
  public allDonations: Array<Donation> = [...collegeReadiness, ...diaperProgram, ...foodPantry, ...periodProgram];

  validateDonation = (): boolean => {
    if (this.quantity && this.quantity < 0)
      return false;
    return this.name && this.donator && this.program && this.quantity ? false : true;
  }

  lowerCaseDonationName = () => {
    this.name = this.name?.toLowerCase();
  }

  public removeDonation = (): boolean => {
    let errors = this.validateDonation();

    if (errors) {
      return false;
    }

    this.lowerCaseDonationName();

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
            quantity: foundItem.quantity - this.quantity!
          });
          return true;
        }

        return false;

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
            quantity: foundItem.quantity - this.quantity!
          })
          return true;
        }

        return false;
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
            quantity: foundItem.quantity - this.quantity!
          })
          return true;
        }

        return false;

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

        return false;

      } catch (error) {
        console.log(error);

        return false;
      }
    }

    // something went wrong
    return false;

  }

}
