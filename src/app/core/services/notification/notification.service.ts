import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NotificationService {

  constructor(
    private snackBar: MatSnackBar,
    private zone: NgZone
  ) { }

  showSuccess(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, null, {
        duration: 1600,
        panelClass: 'success',
      });
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, 'close', {
        duration: 1600,
        panelClass: 'error'
      });
    });
  }
}
