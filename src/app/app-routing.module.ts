import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'; //This module has the products from the data.json
import { AddressPageComponent } from './address-page/address-page.component'; //This module is used to ask for user address


const routes: Routes = [
  // Setting the Default route to show the products
  {path: '', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'address', component: AddressPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

