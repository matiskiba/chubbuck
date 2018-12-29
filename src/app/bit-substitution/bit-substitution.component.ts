import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AppComponent, BitSubstitution} from "../app.component";

@Component({
  selector: 'app-bit-substitution',
  templateUrl: './bit-substitution.component.html',
  styleUrls: ['./bit-substitution.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BitSubstitutionComponent implements OnInit {
  @Input() bitSubstitution:BitSubstitution;

  constructor(public appComponent:AppComponent) { }

  ngOnInit() {
  }

}
