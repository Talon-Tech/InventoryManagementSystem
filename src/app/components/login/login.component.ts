import { Component, OnInit } from '@angular/core';
import loginArray from 'src/app/repositories/userLogins.repository';
import { Router } from '@angular/router';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private userSvc:UserloginService, private router:Router) { }
  username='';
  password='';
  errorOccured=false;
  ngOnInit(): void {
  }

  Login()
  {
    this.userSvc.Login(this.username, this.password).subscribe({
      next: (data) => {
        this.userSvc.SetCurrentUser(data);
        console.log(data);
      },
      error: (err) => {
        console.log(err);
        
      },
      complete: () => {
        console.log('Complete')
      }
    });

    // Old Hard Coded Login

    /*let result =this.userSvc.Login(this.username,this.password);
    if(result)
    {
        this.router.navigate(['/']);
    }
    else
    {
      this.errorOccured=true;
    }*/
  }

}

/*export class LoginComponent implements OnInit {

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

}*/