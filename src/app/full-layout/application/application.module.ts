import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey/survey.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ChatsComponent } from './chats/chats.component';
import { RouterModule, Routes } from '@angular/router';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';

const routes: Routes = [
  { path: 'chats', component: ChatsComponent },
 { path: 'survey', component: SurveyComponent },
 { path: 'to-do-list', component: ToDoListComponent }
];
@NgModule({
  declarations: [
    SurveyComponent,
    ToDoListComponent,
    ChatsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DropDownsModule,
    LayoutModule,
    LabelModule
 
    
       

  ],
  exports:[RouterModule]
})
export class ApplicationModule { }
