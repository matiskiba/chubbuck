import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {AppComponent, BitWord} from "../app.component";

@Component({
  selector: 'app-bit-word',
  templateUrl: './bit-word.component.html',
  styleUrls: ['./bit-word.component.scss'],
    host: {
      '[class.focused]': 'appComponent.focusedBitContent === self.bitWord',
        '[class.substitution]':'bitWord.substitutionId'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BitWordComponent implements OnInit {
  @Input() bitWord:BitWord;
  self:BitWordComponent;

  constructor(public appComponent:AppComponent) {
    this.self = this;
  }

  ngOnInit() {
  }

}
