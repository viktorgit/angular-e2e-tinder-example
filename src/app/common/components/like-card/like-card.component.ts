import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ILiker, LikesDataService } from '@common/services/likes-data.service';
import { BehaviorSubject, catchError, EMPTY, map, mergeMap, Observable } from 'rxjs';
import { LikeCardModalComponent } from './like-card-modal/like-card-modal.component';

@Component({
  selector: 'app-like-card',
  templateUrl: './like-card.component.html',
  styleUrls: ['./like-card.component.scss'],
})
export class LikeCardComponent {
  public defaultCard: ILiker = {
    id: 0,
    name: 'Пары закончились',
    image: 'https://img.icons8.com/ios/344/delete-sign--v1.pngs',
    description: 'попробуйте проверить позднее',
    potentialCouple: false
  }
  public currentCardIndex$ = new BehaviorSubject(0);
  public currentCard$: Observable<ILiker> = this.currentCardIndex$.pipe(
    mergeMap((index) => {
      return this.likeService.getLikers().pipe(
        map(result => result.data[index] || this.defaultCard),
        catchError(err => {
          this.dialog.open(LikeCardModalComponent, {
            data: {
              description: err
            }
          })
          return EMPTY;
        })
      )
    })
  );

  constructor(public likeService: LikesDataService, public dialog: MatDialog) { }

  like(card: ILiker) {
    if (card.potentialCouple) {
      this.dialog.open(LikeCardModalComponent, {
        data: {
          description: `Ура! Вы и ${card.name} образовали пару!`
        }
      }).afterClosed().subscribe(_ => {
        this.setLikeQuery(card);
      });
      return;
    }
    this.setLikeQuery(card);
  }

  setLikeQuery(card: ILiker) {
    this.likeService.setLike(card.id).pipe(catchError(err => {
      this.dialog.open(LikeCardModalComponent, {
        data: {
          description: err
        }
      })
      return EMPTY;
    })).subscribe(r => {
      this.currentCardIndex$.next(this.currentCardIndex$.getValue() + 1);
    })
  }

  dislike(card: ILiker) {
    this.likeService.setDislike(card.id).pipe(catchError(err => {
      this.dialog.open(LikeCardModalComponent, {
        data: {
          description: err
        }
      })
      return EMPTY;
    })).subscribe(r => {
      this.currentCardIndex$.next(this.currentCardIndex$.getValue() + 1);
    })
  }
}
