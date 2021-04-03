import { Injectable, EventEmitter } from '@angular/core';
import {Feedback} from './feedback';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url = 'https://موزون.com/api/verify';
  receivedFilter: EventEmitter<Feedback>;

  constructor(private http: HttpClient) {
    this.receivedFilter = new EventEmitter<Feedback>();
  }

  verify(poem: string) {
    console.log(poem);
    this.http.post(this.url, {poem}).subscribe((param: Feedback) => {
      console.log(param);
      this.receivedFilter.emit(param);
    });
  }
}

