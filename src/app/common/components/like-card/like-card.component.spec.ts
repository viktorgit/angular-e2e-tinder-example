import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LikesDataService } from '@common/services/likes-data.service';
import { LikeCardModalComponent } from './like-card-modal/like-card-modal.component';
import { LikeCardComponent } from './like-card.component';
import { LikesDataServiceImpl } from './like-card.providers';

describe('LikeCardComponent', () => {
    let likesDataService: LikesDataService;
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

    likesDataService = TestBed.inject(LikesDataService);
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
    likesDataService.setLike(1).subscribe(res => {
      expect(res).toBeTruthy();
    })
  }));

  it('should woking dislike', fakeAsync(() => {
    likesDataService.setDislike(1).subscribe(res => {
      expect(res).toBeTruthy();
    })
  }));
});
