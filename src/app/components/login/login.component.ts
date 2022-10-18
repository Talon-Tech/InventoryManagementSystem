import { Component, OnInit } from '@angular/core';
import loginArray from 'src/app/repositories/userLogins.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router){
  }

  ngOnInit(): void {
  }

  fakeUsername: string = "Matt";
  fakePassword: string = "1234";
  username?: string;
  password?: string;

  clicked(){
    loginArray.push({
      name: this.username!,
      password: this.password!
    });

    if (this.username == this.fakeUsername && this.password == this.fakePassword){
    alert('Success, you may now add a donation!')
    this.router.navigate(['/add-donation']);
     }
     else{
      alert('Invalid pls try again');
     }

  }

}

