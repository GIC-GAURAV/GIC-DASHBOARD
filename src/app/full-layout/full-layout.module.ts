import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullLayoutRoutingModule } from './full-layout-routing.module';
import { FullLayoutComponent } from './full-layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FullLayoutComponent
  ],
  imports: [
    CommonModule,
    FullLayoutRoutingModule,
    SharedModule
  ]
})
export class FullLayoutModule { }
