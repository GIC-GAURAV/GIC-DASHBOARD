import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { Routes } from '@angular/router';



const routes: Routes = [
  { path: 'demo', component: DemoComponent},

];
@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DemoModule { }
