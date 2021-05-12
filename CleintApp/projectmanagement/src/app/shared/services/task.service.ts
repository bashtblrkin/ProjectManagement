import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task, TaskUser, UpdateTask} from '../interfaces/interfaces';
import {RESOURCE_API_URL} from '../../app-injection-tokens';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TaskService {

  constructor(
    private http: HttpClient,
    @Inject(RESOURCE_API_URL) private apiUrl: string
  ) {
  }

  getTaskById(id: string): Observable<Task> {
    return this.http.get<any>(`${this.apiUrl}api/tasks/task`, {
      params: new HttpParams().set('id', id)
    })
      .pipe(
        map((response: Task[]) => {
            return response[0]
        })
      )
  }

  updateTaskStatus(task: UpdateTask): Observable<UpdateTask> {
    return this.http.put<any>(`${this.apiUrl}api/tasks/task/update`, task)
  }

  getTasksByUser(): Observable<TaskUser[]> {
    return this.http.get<TaskUser[]>(`${this.apiUrl}api/tasks/user`)
  }
}
