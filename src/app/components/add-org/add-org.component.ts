import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'; 
import { v4 as uuidv4} from "uuid";

import orgArray from '../../repositories/orgs.repositories';

@Component({
  selector: 'app-add-org',
  templateUrl: './add-org.component.html',
  styleUrls: ['./add-org.component.scss']
})
export class AddOrgComponent implements OnInit {

  // orgArr: Array<Organization> = [];
  // newOrg: Organization | null = null;
  error = false;
  errorMsg = "Please complete the required information";

  id?: string;
  orgName?: string;
  orgContactFirstName?: string;
  orgContactLastName?: string;
  orgContactPhone?:string; 

  // orgArrLen = orgArray.length; 

  constructor(private location: Location) { }

  ngOnInit(): void { }

  AddOrg() {
    if(this.orgName == undefined || this.orgContactFirstName == undefined || this.orgContactLastName == undefined || this.orgContactPhone == undefined) {
      console.log("Test");
      this.error = true;
      // this.errorMsg = "Please complete the required information";
      alert(this.errorMsg); 
    } else {
      orgArray.push({
        id: uuidv4(),
        orgName: this.orgName!,
        orgContactFirstName: this.orgContactFirstName!,
        orgContactLastName: this.orgContactLastName!,
        orgContactPhone: this.orgContactPhone!,
      });

      console.log(orgArray.length)
      console.log(orgArray);
      alert(this.orgName + " added as an organization!")
    }
  }
}
