import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// Import the functions you need from the firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  app = initializeApp(environment.firebaseConfig);
  db = getFirestore(this.app);

  constructor() { }

  getDb() {
    return this.db; 
  }
}
