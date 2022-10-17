import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OthersComponent} from './others.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: OthersComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
