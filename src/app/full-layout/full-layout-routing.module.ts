import { ApplicationModule } from './application/application.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout.component';

const routes: Routes = [
  { path: '', component: FullLayoutComponent,
 children:[ { 
  path: 'application',
  loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) 
}] },
  
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,ApplicationModule]
})
export class FullLayoutRoutingModule { }
