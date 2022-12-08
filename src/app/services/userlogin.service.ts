import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { Users } from '../models/users.model';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})

export class UserloginService {

dbRef = this.dbSvc.getDb();

constructor(private router: Router, private dbSvc: DbService){}

  @Output() userLoggedIn = new EventEmitter<boolean>();

    userArray:Users[]=[{
    userId:'Matt',
    email:'mzhang@web.com',
    password:'1234',
    fullName:'Matthew Zhang',
    userType:"admin"
  }]
  
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

  async LoginTest() {
    const docRef = await addDoc(collection(this.dbRef, "users"),
      {
        // id: uuidv4(),
        userId:"test",
        email:"test",
        password:"test",
        fullName:"test",
        userType:"test"
      },

    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
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