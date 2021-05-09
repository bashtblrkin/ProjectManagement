import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AddTask, minProject, NewProject, Project, Task, UsersOfProject, UserToProject} from '../interfaces/interfaces';
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
    return this.http.get<Project[]>(`${this.apiUrl}api/projects/project`, {
      params: new HttpParams().set('id', id)
    })
  }

  addUser(userToProject: UserToProject): Observable<UserToProject> {
    return this.http.post<UserToProject>(`${this.apiUrl}api/projects/adduser`, userToProject)
  }

  getUsersOfProject(id: string): Observable<UsersOfProject[]> {
    return this.http.get<UsersOfProject[]>(`${this.apiUrl}api/projects/getusers`, {
      params: new HttpParams().set('id', id)
    })
  }

  addTask(task: AddTask): Observable<AddTask> {
    return this.http.post<AddTask>(`${this.apiUrl}api/tasks/create`, task)
  }

  getTasks(id: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}api/tasks/project`, {
      params: new HttpParams().set('id', id)
    })
  }
}
