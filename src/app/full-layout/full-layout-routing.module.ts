import { ApplicationModule } from './application/application.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout.component';
import { DemoModule } from './demo/demo.module';

const routes: Routes = [
  {
    path: '', component: FullLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
    }]
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./demo/demo.module').then(
        (m) => m.DemoModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ApplicationModule,DemoModule]
})
export class FullLayoutRoutingModule { }
