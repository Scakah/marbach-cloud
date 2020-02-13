import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { FileServingComponent } from './components/file-serving/file-serving.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';

registerLocaleData(localeDe, localeDeExtra);
@NgModule({
  declarations: [
    AppComponent,
    DrinkListComponent,
    FileServingComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
