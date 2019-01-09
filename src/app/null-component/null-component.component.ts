import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-null-component',
  templateUrl: './null-component.component.html',
  styleUrls: ['./null-component.component.scss']
})
export class NullComponentComponent {

  constructor(private route:ActivatedRoute,appComponent:AppComponent) {
    var self = this;

    this.route.paramMap.subscribe(data => {
      var params = data.params;
      if ( params["filename"] )
        appComponent.updateFileName(params["filename"],params["sceneObjective"]);
    });
  }
}
