import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {AppComponent, BitInnerObjectSubstitution} from "../app.component";

@Component({
  selector: 'app-bit-substitution',
  templateUrl: './bit-substitution.component.html',
  styleUrls: ['./bit-substitution.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BitSubstitutionComponent implements OnInit {
  @Input() bitInnerObjectSubstitution:BitInnerObjectSubstitution;

  constructor(public appComponent:AppComponent) { }

  ngOnInit() {
  }

}
