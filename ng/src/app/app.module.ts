import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GonggooglechartsModule } from 'gonggooglecharts'

import { GonggooglechartspecificModule } from 'gonggooglechartspecific'

import { AngularSplitModule } from 'angular-split';

// mandatory
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularSplitModule,

    HttpClientModule,
    GonggooglechartsModule,
    GonggooglechartspecificModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
