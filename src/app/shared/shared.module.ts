import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { IconsModule } from "@progress/kendo-angular-icons";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ButtonsModule,
    IconsModule
  ],
  exports:[
    LayoutModule,
    ButtonsModule,
    IconsModule
  ]
})
export class SharedModule { }
