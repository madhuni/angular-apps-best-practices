import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorService, LoggingService, NotificationService } from './services';

import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';

/** Interceptors to be added */
const INTERCEPTORS: any[] = [
  {provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true}
];

/** All the services to be provided */
const SERVICES: any[] = [
  ErrorService,
  LoggingService,
  NotificationService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SERVICES,
    INTERCEPTORS,
  ]
})
export class CoreModule { }
