import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {Punctuation} from "../app.component";

@Component({
  selector: 'app-bit-punctuation',
  templateUrl: './bit-punctuation.component.html',
  styleUrls: ['./bit-punctuation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BitPunctuationComponent implements OnInit {
  @Input() punctuation:Punctuation;

  constructor() { }

  ngOnInit() {
  }

}
