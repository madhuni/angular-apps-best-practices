import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorService {

  constructor() { }

  /**
   * This function will return the client side
   * error message
   */
  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return `No Internet Connection!`;
    }
    return error.message ? error.message : error.toString();
  }

  /**
   * This function will return the call stack for the
   * error occured
   */
  getClientStack(error: Error): string {
    return error.stack;
  }

  /**
   * This function will return the server side error message
   */
  getServerMessage(error: HttpErrorResponse): string {
    return `${error.message}\n${error.status} - ${error.statusText}`;
  }
}
