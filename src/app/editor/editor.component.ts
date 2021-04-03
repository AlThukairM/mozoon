import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../feedback/feedback.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
  }

  submit(poem: string) {
    const result = this.feedbackService.verify(poem);
    console.log(result);
  }

}
