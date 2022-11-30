import { Component, OnInit } from '@angular/core';

import { v4 as uuidv4 } from "uuid";

import { SAFEProgram } from 'src/app/models/SAFEProgram.type';
import SAFEProgramsReadable from 'src/app/models/SAFEProgramsReadable.model';
import foodPantry from 'src/app/repositories/foodPantry.repository';
import periodProgram from 'src/app/repositories/periodProgam.repository';
import collegeReadiness from 'src/app/repositories/collegeReadiness.repository';
import diaperProgram from 'src/app/repositories/diaperProgram.repository';
import { FormControl, FormGroup } from '@angular/forms';
import { VendorsvcService } from 'src/app/services/vendorsvc.service';
import Vendor from 'src/app/models/vendor.model';
import Donation from 'src/app/models/donation.model';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['../donations.scss']
})
export class AddDonationComponent implements OnInit {

  constructor(private vendorSvs: VendorsvcService, private donationService: DonationService) { }

  async ngOnInit(): Promise<void> {
    this.vendors = await this.vendorSvs.GetVendors();
    this.allDonations = await this.donationService.GetDonations();
    this.filteredDonations = this.allDonations;
  }

  addDonationForm = new FormGroup({
    donation: new FormControl(''),
    vendor: new FormControl(''),
    program: new FormControl(''),
    quantity: new FormControl(''),
  });

  public name?: string;
  public vendors?: any
  public allDonations?: any
  public filteredDonations?: Array<Donation> = []
  public vendor?: string;
  public program?: SAFEProgram;
  public quantity?: number;
  public programs: Array<string> = SAFEProgramsReadable;

  onVendorSelect = (event: any) => {
    let selectedVendor = event;
    console.log(selectedVendor)
    this.filteredDonations = this.allDonations?.filter((donation: { vendor: any; }) => donation.vendor === selectedVendor.value)
    console.log(this.filteredDonations)
  }

  onProgramSelect = (event: any) => {
    let selectedProgram = event;
    console.log(selectedProgram)
    this.filteredDonations = this.allDonations?.filter((donation: { program: any; }) => donation.program === selectedProgram.value)
    console.log(selectedProgram)
  }

  onDonationNameSelect = (event: any) => {
    let selectedDonation = event.value;
    this.quantity = selectedDonation.quantity
    console.log(selectedDonation)
  }

  validateDonation = (): boolean => {
    return this.name && this.vendor && this.program && this.quantity ? false : true;
  }

  async onSubmitAddDonation() {
    console.log(this.addDonationForm)

    if (await this.donationService.GetDonations().then(res => res.find(donation => donation['name'] === this.addDonationForm.value.donation))) {
      debugger;
      return;
    }
    debugger
  }

  public addDonation = (): boolean => {
    let errors = this.validateDonation();

    if (errors) {
      return false;
    }

    let nameLowerCase = this.name!.toLowerCase();

    if (this.program === "Period Program") {

      //find item
      let foundItem = periodProgram.find(item => item.name === this.name);

      try {
        if (foundItem) {
          let oldQuantity = foundItem.quantity;
          let newQuantity = 0;
          if (oldQuantity + this.quantity! > 0) {
            newQuantity = Number.parseInt(oldQuantity.toString()) + Number.parseInt(this.quantity!.toString());
          }
          let updatedDonation = {
            id: foundItem.id,
            name: nameLowerCase,
            vendor: foundItem.vendor,
            program: foundItem.program,
            quantity: newQuantity
          }
          periodProgram.splice(periodProgram.indexOf(foundItem), 1, updatedDonation)
          console.log("remaining inventory", updatedDonation)
          return true;
        }

        periodProgram.push({
          id: uuidv4(),
          name: this.name!,
          vendor: this.vendor!,
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
          let oldQuantity = foundItem.quantity;
          let newQuantity = 0;
          if (oldQuantity + this.quantity! > 0) {
            newQuantity = Number.parseInt(oldQuantity.toString()) + Number.parseInt(this.quantity!.toString());
          }
          let updatedDonation = {
            id: foundItem.id,
            name: nameLowerCase,
            vendor: foundItem.vendor,
            program: foundItem.program,
            quantity: newQuantity
          }
          foodPantry.splice(foodPantry.indexOf(foundItem), 1, updatedDonation)
          console.log("remaining inventory", updatedDonation)
          return true;
        }

        foodPantry.push({
          id: uuidv4(),
          name: this.name!,
          vendor: this.vendor!,
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
          let oldQuantity = foundItem.quantity;
          let newQuantity = 0;
          if (oldQuantity + this.quantity! > 0) {
            newQuantity = Number.parseInt(oldQuantity.toString()) + Number.parseInt(this.quantity!.toString());
          }
          let updatedDonation = {
            id: foundItem.id,
            name: nameLowerCase,
            vendor: foundItem.vendor,
            program: foundItem.program,
            quantity: newQuantity
          }
          collegeReadiness.splice(collegeReadiness.indexOf(foundItem), 1, updatedDonation)
          console.log("remaining inventory", updatedDonation)
          return true;
        }

        collegeReadiness.push({
          id: uuidv4(),
          name: this.name!,
          vendor: this.vendor!,
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
          let oldQuantity = foundItem.quantity;
          let newQuantity = 0;
          if (oldQuantity + this.quantity! > 0) {
            newQuantity = Number.parseInt(oldQuantity.toString()) + Number.parseInt(this.quantity!.toString());
          }
          let updatedDonation = {
            id: foundItem.id,
            name: nameLowerCase,
            vendor: foundItem.vendor,
            program: foundItem.program,
            quantity: newQuantity
          }
          diaperProgram.splice(diaperProgram.indexOf(foundItem), 1, updatedDonation)
          console.log("remaining inventory", updatedDonation)
          return true;
        }

        diaperProgram.push({
          id: uuidv4(),
          name: this.name!,
          vendor: this.vendor!,
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
