import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import { AppComponent } from './app.component';

/** All the imported modules go here */
const modules: any[] = [
  BrowserModule,
  AppRoutingModule,
  CommonModule,
  AngularMaterialModule
];

/** All the components go here */
const components: any[] = [
  AppComponent
];

@NgModule({
  declarations: [components],
  imports: [modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
