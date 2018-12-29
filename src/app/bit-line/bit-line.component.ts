import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {AppComponent, BitLine} from "../app.component";
import {BitChunkComponent} from "../bit-chunk/bit-chunk.component";

@Component({
  selector: 'app-bit-line',
  templateUrl: './bit-line.component.html',
  styleUrls: ['./bit-line.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BitLineComponent implements OnInit {
  @Input() bitLine:BitLine;

  constructor(public appComponent:AppComponent,public bitChunkComponent:BitChunkComponent) { }

  ngOnInit() {
  }

}
