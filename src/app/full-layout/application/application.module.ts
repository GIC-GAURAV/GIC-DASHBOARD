import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey/survey.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ChatsComponent } from './chats/chats.component';
import { RouterModule, Routes } from '@angular/router';


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
    RouterModule.forChild(routes)

  ],
  exports:[RouterModule]
})
export class ApplicationModule { }
