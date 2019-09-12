import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /** Since we don't need to modified the request, hence no need to clone the request */
    return next.handle(req).pipe(
      /** Here we are catching and Re-throwing the Error */
      catchError((err: HttpErrorResponse) => {
        console.error(`ServerErrorInterceptor`, err);
        return throwError(err);
      })
    );
  }
}
