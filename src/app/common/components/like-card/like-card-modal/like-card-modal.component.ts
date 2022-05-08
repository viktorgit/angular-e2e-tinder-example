import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-like-card-modal',
  templateUrl: './like-card-modal.component.html',
  styleUrls: ['./like-card-modal.component.scss'],
})
export class LikeCardModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {description: string},
    private dialogRef: MatDialogRef<LikeCardModalComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }
}
