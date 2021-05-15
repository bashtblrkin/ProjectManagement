import {Inject, Injectable} from '@angular/core';
import {TaskGantt} from '../interfaces/interfaces';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RESOURCE_API_URL} from '../../app-injection-tokens';
import {map} from 'rxjs/operators';


@Injectable()
export class GantTaskService {

  constructor(
    private http: HttpClient,
    @Inject(RESOURCE_API_URL) private apiUrl: string
  ) {
  }

  get(id: string): Promise<TaskGantt[]>{
    return this.http.get<TaskGantt[]>(`${this.apiUrl}api/tasks/project/gant`, {
      params: new HttpParams().set('id', id)
    })
      .toPromise()
  }
}
