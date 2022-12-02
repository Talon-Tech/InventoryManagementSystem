import { Injectable } from '@angular/core';
import donationRepository from '../repositories/donation.repository';
import { DocumentData, collection, doc, getDoc, getDocs, query, where, FieldPath } from 'firebase/firestore/lite';
import { addDoc, updateDoc, deleteDoc } from 'firebase/firestore/lite';
import { DbService } from 'src/app/services/db.service';
import Donation from '../models/donation.model';
import { v4 as uuidv4 } from 'uuid';

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
      id: uuidv4(),
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

    let theNewDonation: any;

    await getDocs(this.donationCollection)
      .then(async (snapshot) => {
        
        let allDocs: any[] = [];
        
        snapshot.docs.forEach(document => {
          allDocs
            .push(
              {
                data: document.data(),
                ref: document.ref
              }
            )
        });
        let foundDonation = allDocs.find(doc => donation.name === doc.data.name);

        console.log(foundDonation, "foundDonation")

        theNewDonation = {
          name: donation.name, 
          quantity: donation.quantity,
          program: donation.program,
          vendor: donation.vendor,
          donationDate: donation.donationDate 
        }

        await updateDoc(foundDonation.ref, theNewDonation).then(() => {
          window.alert(`Donation successful! There ${theNewDonation.quantity > 1 ? "are" : "is"} now ${theNewDonation.quantity} ${theNewDonation.name} in inventory.`);
          window.location.reload()
        });
        
      })      
    
  }

  async DeleteDonation(id: any) {
    await deleteDoc(doc(this.dbRef, "donations", id));
  }
}
