import { Component, OnInit } from '@angular/core';
import { VerifierService } from '../verifier.service';
import { Feedback } from './feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback: Feedback;
  feedback_text: string;
  is_mozoon: boolean;

  constructor(private verifierService: VerifierService) {
    this.verifierService.receivedFilter.subscribe((param: Feedback) => {
      this.feedback = param;
      this.feedback_text = param.بحر;
      this.is_mozoon = param.موزون;
    });
  }

  ngOnInit(): void {
  }

}
