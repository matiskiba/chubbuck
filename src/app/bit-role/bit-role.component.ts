import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {AppComponent, BitRoleChunk} from "../app.component";

@Component({
  selector: 'app-bit-role',
  templateUrl: './bit-role.component.html',
  styleUrls: ['./bit-role.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      '[class.mainRole]':'appComponent.collection.role == bitRole.role'
    }
})
export class BitRoleComponent implements OnInit {
  @Input() bitRole:BitRoleChunk;

  constructor(public appComponent:AppComponent) { }

  ngOnInit() {
  }

}
