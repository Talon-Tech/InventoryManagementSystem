import { Component, OnInit } from '@angular/core';
import collegeReadiness from './repositories/collegeReadiness.repository';
import diaperProgram from './repositories/diaperProgram.repository';
import periodProgram from './repositories/periodProgam.repository';
import foodPantry from './repositories/foodPantry.repository';
import { UserloginService } from './services/userlogin.service';
import { Users } from './models/users.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private newLogin:UserloginService, private router: Router){
  }
  
 
  currentUser: Users|undefined;

  title = 'InventoryManagementSystem';
  foodPantry = foodPantry;
  periodProgram = periodProgram;
  diaperProgram = diaperProgram;
  collegeReadiness = collegeReadiness;

  ngOnInit(): void {
    this.currentUser=this.newLogin.GetCurrentUser();

    this.newLogin.userLoggedIn.subscribe((data)=>{
      if(data)
      {
        this.currentUser=this.newLogin.GetCurrentUser();
      }
      else
      {
        this.currentUser=undefined;
        this.router.navigate(['/']);
      }
    });
  }

  LogoutUser()
  {
    this.newLogin.LogoutUser();
  }

}
