import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OthersComponent} from './others.component';
import {OthersRoutingModule} from './others-routing.module';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      OthersRoutingModule
  ],
  declarations: [
      OthersComponent
  ],
})
export class OthersModule { }
