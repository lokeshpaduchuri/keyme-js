import { Component, OnInit } from '@angular/core';
import sampleData from '../../assets/data.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  Data: any = sampleData; // Loading the json data from assets into the Data variable
  p: Number = 1;  // Used for pagination
  count: Number = 9; // We can alter this number to customize the number of keys to be displayed on a single page


  constructor() { }

  /* This section is used to add the key that will make the add to cart button disappear*/
  addToCart(key){
    // console.log(key);
    key.order = key.order + 1;
  }

  reduceKeyCount(key){
    key.order = key.order - 1 ;
  }

  incrementKeyCount(key){
    key.order = key.order + 1 ;
  }

  ngOnInit() {
    // console.log(this.Data);
  }

}
