import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router, private userlogin: UserloginService){ }
  email='';
  password='';
  errorOccured=false;

  ngOnInit(): void {
  }

  async LoginTest(){
    let result = await this.userlogin.LoginTest(this.email);
    if(result)
    {
        this.router.navigate(['/add-donation']);
    }
    else
    {
        this.errorOccured=true;
    }
  }
}