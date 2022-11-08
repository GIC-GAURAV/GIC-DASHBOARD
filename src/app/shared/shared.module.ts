import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";
import { InputsModule } from '@progress/kendo-angular-inputs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ButtonsModule,
    IconsModule,
    InputsModule,

  ],
  exports:[
    LayoutModule,
    ButtonsModule,
    IconsModule,
    InputsModule
  ]
})
export class SharedModule { }
