import { Component, OnInit } from '@angular/core';
import loginArray from 'src/app/repositories/userLogins.repository';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username?: string;
  password?: number;

  clicked(){
    loginArray.push({
      id: "1",
      name: "Matt",
      password: "1234"
    });

    console.log(loginArray);

  }

}

