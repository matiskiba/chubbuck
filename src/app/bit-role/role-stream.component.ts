import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {AppComponent, RoleStream} from "../app.component";

@Component({
  selector: 'role-stream',
  templateUrl: './role-stream.component.html',
  styleUrls: ['./role-stream.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleStreamComponent implements OnInit {
  @Input() roleStream:RoleStream;

  constructor(public appComponent:AppComponent) { }

  ngOnInit() {
  }

}
