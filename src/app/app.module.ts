import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddressPageComponent } from './address-page/address-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddressPageComponent,
    CustomModalComponent
  ],
  entryComponents: [CustomModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
