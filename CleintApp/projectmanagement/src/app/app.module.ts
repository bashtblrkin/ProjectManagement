import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AUTH_API_URL, RESOURCE_API_URL} from './app-injection-tokens';
import {environment} from '../environments/environment';
import {JwtModule} from '@auth0/angular-jwt';
import {ACCESS_TOKEN_KEY} from './shared/services/auth.service';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import {SearchPipe} from './shared/pipes/search.pipe';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProjectPageComponent } from './project-page/project-page.component';
import {registerLocaleData} from '@angular/common';
import ruLocale from '@angular/common/locales/ru';
import {FlatpickrModule} from 'angularx-flatpickr';
import { CreateTaskPageComponent } from './create-task-page/create-task-page.component';

export function tokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

registerLocaleData(ruLocale, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    UserLayoutComponent,
    ProjectsPageComponent,
    SearchPipe,
    CreateProjectPageComponent,
    ProjectPageComponent,
    CreateTaskPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenWhiteListedDomains
      }
    }),
    BrowserAnimationsModule,
    FormsModule,
    FlatpickrModule.forRoot()
  ],
  providers: [{
      provide: AUTH_API_URL,
      useValue: environment.authApi
    },
    {
      provide: RESOURCE_API_URL,
      useValue: environment.projectManagementApi
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
