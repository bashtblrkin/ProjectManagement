import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {minProject} from '../interfaces/interfaces';
import {RESOURCE_API_URL} from '../../app-injection-tokens';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProjectService {

  constructor(
    private http: HttpClient,
    @Inject(RESOURCE_API_URL) private apiUrl: string) {
  }

  getProjects(): Observable<minProject[]> {
    return this.http.get<minProject[]>(`${this.apiUrl}api/projects`)
  }
}
