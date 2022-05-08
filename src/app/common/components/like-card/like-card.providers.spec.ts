import { LIKERS, LikesDataServiceImpl } from './like-card.providers';

describe('LikeCard Provider', () => {
    let service: LikesDataServiceImpl;
    beforeEach(() => { service = new LikesDataServiceImpl(); });

    it('should return likers', (done: DoneFn) => {
        service.getLikers().subscribe(likers => {
            expect(likers?.data).toBe(LIKERS);
            done();
        });
    });

    it('should set like', (done: DoneFn) => {
        service.setLike(1).subscribe(result => {
            expect(result.result).toBeTrue();
            done();
        });
    });

    it('should set dislike', (done: DoneFn) => {
        service.setDislike(1).subscribe(result => {
            expect(result.result).toBeTrue();
            done();
        });
    });
});
