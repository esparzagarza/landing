import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsRoutingModule } from './cms-routing.module';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { TaskComponent } from './pages/task/task.component';
import { SearchComponent } from './pages/search/search.component';
import { AboutComponent } from './pages/about/about.component';
import { EditTaskComponent } from './modals/edit-task/edit-task.component';
import { CreateTaskComponent } from './modals/create-task/create-task.component';
import { DeleteTaskComponent } from './modals/delete-task/delete-task.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ActivityComponent,
    TaskComponent,
    SearchComponent,
    AboutComponent,
    EditTaskComponent,
    CreateTaskComponent,
    DeleteTaskComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CmsModule { }
