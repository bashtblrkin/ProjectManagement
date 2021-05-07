import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {minProject, NewProject, Project, UserToProject} from '../interfaces/interfaces';
import {RESOURCE_API_URL} from '../../app-injection-tokens';
import {map, tap} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class ProjectService {

  constructor(
    private http: HttpClient,
    @Inject(RESOURCE_API_URL) private apiUrl: string) {
  }

  getProjects(): Observable<minProject[]> {
    return this.http.get<minProject[]>(`${this.apiUrl}api/projects`)
  }

  createProject(project: NewProject): Observable<NewProject> {
    return this.http.post<NewProject>(`${this.apiUrl}api/projects/create`, project)
  }

  getProjectById(id: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}api/projects/project?id=${id}`)
  }

  addUser(userToProject: UserToProject): Observable<UserToProject> {
    return this.http.post<UserToProject>(`${this.apiUrl}api/projects/adduser`, userToProject)
  }
}
