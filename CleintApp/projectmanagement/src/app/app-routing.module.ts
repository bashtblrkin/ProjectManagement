import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {AuthGuard} from './guard/auth.guard';
import {CreateProjectPageComponent} from './create-project-page/create-project-page.component';
import {ProjectPageComponent} from './project-page/project-page.component';
import {CreateTaskPageComponent} from './create-task-page/create-task-page.component';
import {TaskPageComponent} from './task-page/task-page.component';
import {TasksPageComponent} from './tasks-page/tasks-page.component';
import {AccountPageComponent} from './account-page/account-page.component';
import {UpdateAccountPageComponent} from './update-account-page/update-account-page.component';
import {GantProjectsComponent} from './gant-projects/gant-projects.component';
import {GantChartComponent} from './gant-chart/gant-chart.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
    ]
  },
  {
    path: 'user', component: UserLayoutComponent, children: [
      {path: '', redirectTo: 'projects', pathMatch: 'full'},
      {path: 'projects', component: ProjectsPageComponent, canActivate: [AuthGuard]},
      {path: 'projects/create', component: CreateProjectPageComponent, canActivate: [AuthGuard]},
      {path: 'projects/:id', component: ProjectPageComponent, canActivate: [AuthGuard]},
      {path: 'projects/:id/create/task', component: CreateTaskPageComponent, canActivate: [AuthGuard]},
      {path: 'task/:id', component: TaskPageComponent, canActivate: [AuthGuard]},
      {path: 'tasks', component: TasksPageComponent, canActivate: [AuthGuard]},
      {path: 'account', component: AccountPageComponent, canActivate: [AuthGuard]},
      {path: 'account/get/:id', component: AccountPageComponent, canActivate: [AuthGuard]},
      {path: 'account/update', component: UpdateAccountPageComponent, canActivate: [AuthGuard]},
      {path: 'gant/projects', component: GantProjectsComponent, canActivate: [AuthGuard]},
      {path: 'gant/projects/:id', component: GantChartComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
