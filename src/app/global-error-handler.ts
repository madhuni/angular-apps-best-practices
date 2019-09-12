import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ErrorService, NotificationService } from './core/services';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector
  ) {}

  handleError(error: Error | HttpErrorResponse) {

    /**
     * `ErrorHandler` is created before the providers. So we need
     * `Injector` for dependency injection in our custom error handler
     * class.
     */
    const _errorSvc = this.injector.get(ErrorService);
    const _notificationSvc = this.injector.get(NotificationService);

    /** Logic to handle error will go here */
    let message: string;
    let stackTree: string;

    if (error instanceof HttpErrorResponse) {
      // Server side error
      message = _errorSvc.getServerMessage(error);
      _notificationSvc.showError(message);
    } else {
      // Client side error
      message = _errorSvc.getClientMessage(error);
      stackTree = _errorSvc.getClientStack(error);
      _notificationSvc.showError(message);
    }
  }
}
