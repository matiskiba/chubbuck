import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {AppComponent, BitChunk} from "../app.component";

@Component({
  selector: 'app-bit-chunk',
  templateUrl: './bit-chunk.component.html',
  styleUrls: ['./bit-chunk.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-chunkid]':'bitChunk ? bitChunk.chunkId : null'
    },
})
export class BitChunkComponent implements OnInit {
  @Input() bitChunk:BitChunk;

  constructor(public appComponent:AppComponent) { }

  ngOnInit() {
  }

}
