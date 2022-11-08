import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule, Routes } from '@angular/router';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'demo', component: DemoComponent},

];
@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DropDownsModule,
    LayoutModule,
    LabelModule,
    InputsModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DemoModule { }
