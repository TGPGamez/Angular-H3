import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITweet } from '../Interface/itweet';

@Injectable({
  providedIn: 'root'
})
export class TrumpTweetsService {

  constructor(private http:HttpClient) { }

  getTweets() : Observable<ITweet[]> {
    return this.http.get<ITweet[]>('./assets/json/data.json');
  }
}
