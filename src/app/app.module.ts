import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CoreModule } from './core/core.module';

import { GlobalErrorHandler } from './global-error-handler';
import { AppComponent } from './app.component';

/** All the imported modules go here */
const MODULES: any[] = [
  BrowserModule,
  AppRoutingModule,
  CommonModule,
  HttpClientModule,
  AngularMaterialModule,
  CoreModule
];

/** All the components go here */
const COMPONENTS: any[] = [
  AppComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
