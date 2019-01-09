import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitChunkComponent } from './bit-chunk/bit-chunk.component';
import { RoleStreamComponent } from "./bit-role/role-stream.component";
import { BitLineComponent } from './bit-line/bit-line.component';
import { BitWordComponent } from './bit-word/bit-word.component';
import { BitPunctuationComponent } from './bit-punctuation/bit-punctuation.component';
import {ContextMenuModule, ContextMenuService} from "ngx-contextmenu";
import { BitSubstitutionComponent } from './bit-substitution/bit-substitution.component';
import {EscapeHtmlPipe} from "./keep-html.pipe";
import { NullComponentComponent } from './null-component/null-component.component';

@NgModule({
  declarations: [
      EscapeHtmlPipe,
      AppComponent,
    BitChunkComponent,
    RoleStreamComponent,
    BitLineComponent,
    BitWordComponent,
    BitPunctuationComponent,
    BitSubstitutionComponent,
    NullComponentComponent
  ],
  imports: [
      ContextMenuModule,
    BrowserModule,
    AppRoutingModule,
      FormsModule
  ],
  providers: [ContextMenuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
