import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LikesDataService } from '@common/services/likes-data.service';
import { LikeCardModalComponent } from './like-card-modal/like-card-modal.component';
import { LikeCardComponent } from './like-card.component';
import { LikesDataServiceImpl } from './like-card.providers';

describe('LikeCardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, BrowserAnimationsModule],
      declarations: [
        LikeCardComponent,
        LikeCardModalComponent
      ],
      providers: [
        MatDialog,
        {
          provide: LikesDataService,
          useClass: LikesDataServiceImpl,
      }
      ]
    }).compileComponents();
  });

  it('should create the like-card', () => {
    const fixture = TestBed.createComponent(LikeCardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the card', () => {
    const fixture = TestBed.createComponent(LikeCardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-panel')).toBeTruthy();
  });

  it('should woking match', fakeAsync(() => {
    const fixture = TestBed.createComponent(LikeCardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    let likeBtn: HTMLElement = compiled.getElementsByClassName('like')[0] as HTMLElement;
    likeBtn.click();
    tick(500);
    expect(document.getElementsByClassName('dialog')).toBeTruthy();
  }));

  it('should woking like', fakeAsync(() => {
    const fixture = TestBed.createComponent(LikeCardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    let firstCardId = (compiled.getElementsByClassName('name')[0] as HTMLElement).dataset['id'];
    let likeBtn: HTMLElement = compiled.getElementsByClassName('like')[0] as HTMLElement;
    likeBtn.click();
    fixture.detectChanges();
    let dialogBtn: HTMLElement = window.document.getElementsByClassName('close')[0] as HTMLElement;
    dialogBtn.click();
    tick(500);
    fixture.detectChanges();
    let secondCardId = (compiled.getElementsByClassName('name')[0] as HTMLElement).dataset['id'];
    expect(firstCardId).not.toEqual(secondCardId);
  }));

  it('should woking dislike', fakeAsync(() => {
    const fixture = TestBed.createComponent(LikeCardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    let firstCardId = (compiled.getElementsByClassName('name')[0] as HTMLElement).dataset['id'];
    let likeBtn: HTMLElement = compiled.getElementsByClassName('dislike')[0] as HTMLElement;
    likeBtn.click();
    fixture.detectChanges();
    let secondCardId = (compiled.getElementsByClassName('name')[0] as HTMLElement).dataset['id'];
    expect(firstCardId).not.toEqual(secondCardId);
  }));
});
