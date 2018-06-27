import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatOptionModule,MatSelectModule,MatInputModule,MatCardModule,MatRadioModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,MatCheckboxModule,FormsModule
    ,MatFormFieldModule,MatOptionModule,MatSelectModule,MatInputModule,MatCardModule,MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
