import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string, action: string, duration: number = 2000): void {
    this.showSnackbar(message, action, 'snackbar-success', duration, 'top');
  }

  showError(message: string, action: string, duration: number = 2000): void {
    this.showSnackbar(message, action, 'snackbar-error', duration, 'top');
  }

  private showSnackbar(message: string, action: string, panelClass: string, duration: number, verticalPosition: MatSnackBarVerticalPosition): void {
    const config: MatSnackBarConfig = {
      duration: duration,
      panelClass: [panelClass],
      horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
      verticalPosition: verticalPosition, // Set the vertical position to 'top'
    };

    this.snackBar.open(message, action, config);
  }
}
