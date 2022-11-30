import { Injectable } from '@angular/core';
import donationRepository from '../repositories/donation.repository';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor() { }

  GetDonations() {
    return donationRepository;
  }
}
