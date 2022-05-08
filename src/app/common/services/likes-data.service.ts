import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export abstract class LikesDataService {
  constructor() {}

  public abstract getLikers(): Observable<IResponse<ILiker[]>>;
  public abstract setLike(id: number): Observable<IResponse<string>>;
  public abstract setDislike(id: number): Observable<IResponse<string>>;
}

export interface ILiker {
    id: number;
    name: string;
    image: string;
    description: string;
    potentialCouple: boolean;
}

export interface IResponse<T> {
    data: T;
    result: boolean;
}