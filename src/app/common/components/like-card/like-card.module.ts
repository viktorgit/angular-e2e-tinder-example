import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LikesDataService } from '@common/services/likes-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { LikeCardComponent } from './like-card.component';
import { LikesDataServiceImpl } from './like-card.providers';
import { LikeCardModalComponent } from './like-card-modal/like-card-modal.component';

@NgModule({
  declarations: [
    LikeCardComponent,
    LikeCardModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [LikeCardComponent],
  providers: [{
    provide: LikesDataService,
    useClass: LikesDataServiceImpl,
}]
})
export class LikeCardModule { }
