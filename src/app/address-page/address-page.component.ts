import { Component, OnInit } from '@angular/core';
import States from '../../assets/states.json';
import { MatDialog } from '@angular/material';
import {CustomModalComponent } from '../custom-modal/custom-modal.component';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.scss']
})
export class AddressPageComponent implements OnInit {
  //List of all the input data bindings to the input fields
  StatesData: any = States;
  completedForm: boolean = true;
  fullName: string = null;
  streetAddress: string = null;
  aptNo: string = null;
  cityName: string = null;
  stateCode: string = null;
  zip: number = null;
  emailAddress: string = null;
  fullNameError: boolean = false;
  streetAddressError: boolean = false;
  cityNameError: boolean = false;
  stateCodeError: boolean = false;
  zipError: boolean = false;
  emailAddressError: boolean = false;
  constructor( private dialog: MatDialog) { }

  ngOnInit() {
  }
  completeOrder() {
    this.fullNameError = false;
    this.streetAddressError = false;
    this.cityNameError = false;
    this.zipError = false;
    this.emailAddressError = false;
    this.stateCodeError = false;
    if (this.fullName && this.streetAddress && this.cityName && this.zip && this.emailAddress && this.stateCode) {
      this.completedForm = true;
      
      // Created a custom dialog component to Confirm the Address
      let dialogRef = this.dialog.open(CustomModalComponent, {
        height: 'auto',
        width: '700px',
        panelClass: 'custom-modal-container'
      });
      dialogRef.componentInstance.fullName = this.fullName;
      dialogRef.componentInstance.streetAddress = this.streetAddress;
      dialogRef.componentInstance.aptNo = this.aptNo;
      dialogRef.componentInstance.city = this.cityName;
      dialogRef.componentInstance.state = this.stateCode;
      dialogRef.componentInstance.zip = this.zip;
      dialogRef.componentInstance.emailID = this.emailAddress;
    } else {
      //Different errors for the form validation 
      if (!this.fullName) {
        this.fullNameError = true;
      }
      if (!this.streetAddress) {
        this.streetAddressError = true;
      }
      if (!this.cityName) {
        this.cityNameError = true;
      }
      if (!this.zip) {
        this.zipError = true;
      }
      if (!this.emailAddress) {
        this.emailAddressError = true;
      }
      if (!this.stateCode) {
        this.stateCodeError = true;
      }
    }
  }

}
