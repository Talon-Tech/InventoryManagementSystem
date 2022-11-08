import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})

export class UserloginService {

  @Output() userLoggedIn = new EventEmitter<boolean>();
 
  currentUser:Token|undefined;  
  constructor(private httpClient:HttpClient) {
    let tokenInstance = localStorage.getItem('token');
    this.currentUser = tokenInstance?JSON.parse(tokenInstance):null;
  }

  Login(userId:string, pwd:string)
  {
 
    return this.httpClient.get<Token>(`http://localhost:4200/login/${userId}/${pwd}`);
  }

  SetCurrentUser(token:Token)
  {
    this.currentUser = token;
    localStorage.setItem('token',JSON.stringify(token));
    this.userLoggedIn.emit(true);
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