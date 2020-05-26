import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import {  MatToolbarRow} from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
