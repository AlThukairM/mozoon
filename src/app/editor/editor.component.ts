import { Component, OnInit } from '@angular/core';
import { VerifierService } from '../verifier.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private verifierService: VerifierService) { 
    
  }

  ngOnInit(): void {
  }

  submit(poem: string) {
    var result = this.verifierService.verify(poem);
    console.log(result);
  }

}
