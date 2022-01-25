import { Component, OnInit } from '@angular/core';
import { ITweet } from '../Interface/itweet';
import { TrumpTweetsService } from '../service/trump-tweets.service';

@Component({
  selector: 'app-trump-tweets',
  templateUrl: './trump-tweets.component.html',
  styleUrls: ['./trump-tweets.component.css']
})
export class TrumpTweetsComponent implements OnInit {

  tweets: ITweet[] = [];
  input: string = "Democrat";
  overLikes: number = 200000;
  

  constructor(private trumpTweetService: TrumpTweetsService) { }

  ngOnInit(): void {
    this.trumpTweetService.getTweets().subscribe((data: ITweet[]) => {
      next: this.tweets = data;
    })
  }

  SearchForWord(text: string) : boolean {
      return text.includes(this.input);
  }

  EnoughLikes(likes: number) : boolean {
    return likes > this.overLikes;
  }
}
