import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NullComponentComponent} from "./null-component/null-component.component";

const routes: Routes = [
  { path: ':filename', component: NullComponentComponent },
  { path: ':filename/:sceneObjective',      component: NullComponentComponent },
  { path: '**',      component: NullComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
