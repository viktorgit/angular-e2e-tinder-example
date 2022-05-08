import { Injectable } from "@angular/core";
import { LikesDataService, ILiker, IResponse } from "@common/services/likes-data.service";
import { Observable, of } from "rxjs";

@Injectable()
export class LikesDataServiceImpl implements  LikesDataService {
    constructor() {}

    getLikers(): Observable<IResponse<ILiker[]>> {
        return of({
            data: LIKERS,
            result: true
        })
    }

    public setLike(id: number): Observable<IResponse<string>> {
        return of({
            data: 'ok',
            result: true
        })
    }

    public setDislike(id: number): Observable<IResponse<string>> {
        return of({
            data: 'ok',
            result: true
        })
    }
}

export const LIKERS: ILiker[] = [
    {
        id: 1,
        name: 'Jane',
        description: 'I like dolphins',
        image: 'https://thispersondoesnotexist.com/image?1',
        potentialCouple: true
    },
    {
        id: 2,
        name: 'Joe',
        description: 'I like flowers',
        image: 'https://thispersondoesnotexist.com/image?2',
        potentialCouple: false
    },
    {
        id: 3,
        name: 'Vasya',
        description: 'I like for run',
        image: 'https://thispersondoesnotexist.com/image?3',
        potentialCouple: false
    },
    {
        id: 4,
        name: 'Tanya',
        description: 'I like beer',
        image: 'https://thispersondoesnotexist.com/image?4',
        potentialCouple: true
    },
    {
        id: 5,
        name: 'Kolya',
        description: 'I like eat',
        image: 'https://thispersondoesnotexist.com/image?5',
        potentialCouple: false
    }
];