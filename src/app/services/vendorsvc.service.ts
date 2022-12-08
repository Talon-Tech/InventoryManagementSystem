import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

// Import the functions you need from the firebase SDKs you need
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  FieldPath,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';

// Imports
import Vendor from 'src/app/models/vendor.model';
import vendorArr from 'src/app/repositories/vendor.repository';
import { DbService } from 'src/app/services/db.service';
import firebase from "firebase/compat";
import QuerySnapshot = firebase.firestore.QuerySnapshot;

@Injectable({
  providedIn: 'root'
})
export class VendorsvcService {
  dbRef = this.dbSvc.getDb();
  vendorCollection = collection(this.dbSvc.getDb(), "vendors");

  constructor(private router: Router, private dbSvc: DbService) { }

  async GetVendors() {
    let vendors: DocumentData[] = [];
    const querySnapshot = await getDocs(collection(this.dbRef, "vendors"));
    querySnapshot.forEach((doc) => {
      vendors.push({ ...doc.data() });
    });

    return vendors;
  }
  async GetVendor(id: any) {
    const docRef = doc(this.dbRef, "vendors", id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  }

  async AddVendor(vendor: Vendor) {
    const docRef = await addDoc(this.vendorCollection,
      {
        // id: uuidv4(),
        name: vendor.name,
        contactFirst: vendor.contactFirst,
        contactLast: vendor.contactLast,
        contactPhone: vendor.contactPhone,
      },

    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
  }

  async addVendorTest() {
    const docRef = await addDoc(collection(this.dbRef, "vendors"),
      {
        // id: uuidv4(),
        name: "test",
        contactFirst: "test",
        contactLast: "test",
        contactPhone: "test",
      },

    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
  }

  async UpdateVendor(vendor: Vendor) {
    const vendorRef = doc(this.dbRef, "vendors", vendor.id);
    await updateDoc(vendorRef, {
      name: vendor.name,
      contactFirst: vendor.contactFirst,
      contactLast: vendor.contactLast,
      contactPhone: vendor.contactPhone,
    });
  }

  async DeleteVendor(id: any) {
    await deleteDoc(doc(this.dbRef, "vendors", id));
  }
}
