import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  fullName: string ;
  streetAddress: string;
  aptNo: string ;
  city: string;
  state: string;
  zip: number;
  emailID: string;
  constructor() { }

  ngOnInit() {
  }

}
