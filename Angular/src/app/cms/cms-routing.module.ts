import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { TaskComponent } from './pages/task/task.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: '', component: DashboardComponent },
      { path: '**', redirectTo: '' },
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
