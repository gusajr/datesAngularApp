import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';

import {MaterialExampleModule} from '../environments/material.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatRippleModule,
    MatButtonModule,
    MatToolbarModule,
    NgxMaterialTimepickerModule,
    MatFormFieldModule,
    FormsModule,
    MaterialExampleModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule {
 }