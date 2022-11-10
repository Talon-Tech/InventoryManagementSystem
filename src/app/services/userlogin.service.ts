import { EventEmitter, Injectable, Output } from '@angular/core';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})

export class UserloginService {

  @Output() userLoggedIn = new EventEmitter<boolean>();

  userArray:Users[]=[{
    userId:'Matt',
    password:'1234',
    fullName:'Matthew Zhang'
  }];
  
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