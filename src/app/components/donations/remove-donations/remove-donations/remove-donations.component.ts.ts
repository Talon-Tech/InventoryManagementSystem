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
import Donation, {EMPTY_DONATION} from 'src/app/models/donation.model';
import { DonationService } from 'src/app/services/donation.service';
import {combineLatest, filter, startWith, tap} from 'rxjs';


@Component({
  selector: 'app-remove-donation',
  templateUrl: './remove-donation.component.html',
  styleUrls: ['../../donations.scss']
})
export class RemoveDonationComponent implements OnInit {

  constructor(
    private vendorSvs: VendorsvcService,
    private donationService: DonationService
  ) { }

  async ngOnInit(): Promise<void> {
    this.vendors = await this.vendorSvs.GetVendors();
    this.allDonations = await this.donationService.GetDonations();
    this.filteredDonations = this.allDonations;

    let _programControl = this.addDonationForm.controls.program
    let _vendorControl = this.addDonationForm.controls.vendor

    let programChanges$ = _programControl.valueChanges.pipe(startWith(''))
    let vendorChanges$ = _vendorControl.valueChanges.pipe(startWith(''))

    combineLatest([
      programChanges$,
      vendorChanges$,
    ]).pipe(
      filter(([programName, vendorName]) => {
        return !!(programName && vendorName);
      }),
      tap(([programName, vendorName]) => {
        this.filteredDonations = this.allDonations?.filter(don => don.vendor === vendorName && don.program == programName);
        if (this.filteredDonations.length == 0)
          this.donationControl().setValue(EMPTY_DONATION)
      })
    ).subscribe()
  }

  donationControl = () => {
    return this.addDonationForm.controls.donation
  }

  shouldShow = () => {
    return !!(this.addDonationForm.controls.donation.value?.id)
  }

  addDonationForm = new FormGroup({
    donation: new FormControl(EMPTY_DONATION),
    vendor: new FormControl(''),
    program: new FormControl(''),
    quantity: new FormControl(''),
  });

  public name?: string;
  public vendors?: any
  public allDonations: any[] = []
  public filteredDonations: Array<Donation> = []
  public vendor?: string;
  public program?: SAFEProgram;
  public quantity?: number;
  public programs: Array<string> = SAFEProgramsReadable;

  isDonationSelected: boolean = false;

  onVendorSelect = (event: any) => {
    let selectedVendor = event;
    this.filteredDonations = this.allDonations?.filter((donation: { vendor: any; }) => donation.vendor === selectedVendor.value)
  }

  onProgramSelect = (event: any) => {
    let selectedProgram = event;
    this.filteredDonations = this.allDonations?.filter((donation: { program: any; }) => donation.program === selectedProgram.value)
  }

  onDonationNameSelect = (event: any) => {
    let selectedDonation = event.value;
    this.quantity = selectedDonation.quantity
    this.isDonationSelected = true;
  }

  validateDonation = (): boolean => {
    return this.name && this.vendor && this.program && this.quantity ? false : true;
  }

  async onSubmitAddDonation() {

    let foundDonation = this.allDonations.find(donation => donation.name === this.addDonationForm.value.donation!.name) //await this.donationService.GetDonations().then(res => res.find(donation => donation['name'] === this.addDonationForm.value.donation))

    if (foundDonation) {
      let newQuantity = Number.parseInt(foundDonation.quantity.toString()) - Number.parseInt(this.addDonationForm.value.quantity!.toString());

      let updatedDonation = {
        id: foundDonation.id,
        name: foundDonation.name,
        quantity: newQuantity,
        program: foundDonation.program,
        vendor: foundDonation.vendor,
        donationDate: foundDonation.donationDate
      }

      this.donationService.UpdateDonation(updatedDonation)

      return;
    }

    let newDonationToRemove = {
      id: uuidv4(),
      name: this.addDonationForm.value.donation!.name,
      quantity: this.addDonationForm.value.donation!.quantity,
      program: this.addDonationForm.value.donation!.program,
      vendor: this.addDonationForm.value.donation!.vendor,
      donationDate: new Date().toUTCString()
    }

    this.addDonationForm.reset()

    await this.donationService.AddDonation(newDonationToRemove);

    return;
  }


}
