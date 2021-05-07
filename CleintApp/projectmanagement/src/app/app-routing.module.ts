import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {AuthGuard} from './guard/auth.guard';
import {CreateProjectPageComponent} from './create-project-page/create-project-page.component';
import {ProjectPageComponent} from './project-page/project-page.component';

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
      {path: 'projects/:id', component: ProjectPageComponent, canActivate: [AuthGuard]}
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
