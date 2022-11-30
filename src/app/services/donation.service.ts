import { Injectable } from '@angular/core';
import donationRepository from '../repositories/donation.repository';
import { DocumentData, collection, doc, getDoc, getDocs, query, where, FieldPath } from 'firebase/firestore/lite';
import { addDoc, updateDoc, deleteDoc } from 'firebase/firestore/lite';
import { DbService } from 'src/app/services/db.service';
import Donation from '../models/donation.model';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  donationCollection = collection(this.dbSvc.getDb(), "donations");
  dbRef = this.dbSvc.getDb(); 

  constructor(private dbSvc: DbService) { }

  async GetDonations() {
    let donations: DocumentData[] = [];
    const querySnapshot = await getDocs(this.donationCollection);

    querySnapshot.forEach((doc) => {
      donations.push(doc.data());
    });

    return donations;
  }

  async GetDonation(id: any) {
    const docRef = doc(this.dbRef, "donations", id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  }

  async AddDonation(donation: Donation) {
    const docRef = await addDoc(this.donationCollection,
    {
      // id: uuidv4(),
      name: donation.name,
      quantity: donation.quantity,
      program: donation.program,
      vendor: donation.vendor,
      donationDate: donation.donationDate
    },

  );
  await updateDoc(docRef, {
    id: docRef.id,
  });
  }

  async UpdateDonation(donation: Donation) {
    const donationRef = doc(this.dbRef, "donations", donation.id);
    await updateDoc(donationRef, {
      name: donation.name, 
      quantity: donation.quantity,
      program: donation.program,
      vendor: donation.vendor,
      donationDate: donation.donationDate 
    });
  }

  async DeleteDonation(id: any) {
    await deleteDoc(doc(this.dbRef, "donations", id));
  }
}
