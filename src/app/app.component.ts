import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { NotificationService } from './core/services';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'journey-with-angular';

  private baseUrl: string = '../assets/mock-data';

  constructor(
    private http: HttpClient,
    private _notificationSvc: NotificationService
  ) {}

  ngOnInit() {}

  throwSimpleError() {
    throw new Error('My Pretty Error');
  }

  /**
   * This piece of code will be written inside a servie.
   * Here we can write a custom handler, which may change the
   * error response to any custom type.
   */
  getTeamsObservable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-users.json$`).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(`CatchError inside AppComponent`, err);
        return throwError(err);
      })
    );
  }

  getTeams() {
    this.getTeamsObservable()
      .subscribe(
        (res: any) => {
          console.log(res);
          this._notificationSvc.showSuccess('Data fetched successfully!');
        },
        (err: Error | HttpErrorResponse) => {
          console.log(`Inside AppComponent subscription`, err);
          this.title = 'A http error is encountered!';
          throw err;
        }
      );
  }
}
