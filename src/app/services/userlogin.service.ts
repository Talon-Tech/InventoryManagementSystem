import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import {addDoc, collection, doc, getDocs, query, updateDoc, where} from 'firebase/firestore';
import { Users } from '../models/users.model';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})

export class UserloginService {

dbRef = this.dbSvc.getDb();

constructor(private router: Router, private dbSvc: DbService){}

  @Output() userLoggedIn = new EventEmitter<boolean>();

    userArray:Users[]=[]

  currentUser:Users|undefined;

  Login(userId:string, pwd:string)
  {
    let foundUser=this.userArray.find(u=>u.userId==userId && u.password==pwd);
    if(foundUser)
    {
      this.currentUser=foundUser;
      this.userLoggedIn.emit(true);
      return foundUser.fullName;
    }
    else
    {
      return false;
    }
  }

  async LoginTest(email: string) {
    const q = query(collection(this.dbRef, "users"), where('email', '==', email))

    const querySnapshot = await getDocs(q);

    let users: Users[] = []

    querySnapshot.forEach(doc => {
      const user = doc.data() as Users;
      users.push(user)
    })

    if (users.length === 1) {
      return true;
    }

    return false;
  }

  GetCurrentUser()
  {
    return this.currentUser;
  }

  LogoutUser()
  {
    this.currentUser=undefined;
    this.userLoggedIn.emit(false);
  }

}
