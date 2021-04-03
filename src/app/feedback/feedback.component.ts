import { Component, OnInit } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { Feedback } from './feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback: Feedback = new Feedback();

  constructor(private feedbackService: FeedbackService) {
    this.feedbackService.receivedFilter.subscribe((param: Feedback) => {
      this.feedback = param;
    });
  }

  ngOnInit(): void {
  }

}
