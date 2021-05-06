import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/interfaces';
import {RESOURCE_API_URL} from '../../app-injection-tokens';

@Injectable({providedIn: 'root'})
export class UserService
{
  constructor(
    private http: HttpClient,
    @Inject(RESOURCE_API_URL) private apiUrl: string
  ) {}

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}api/users/im`)
  }
}
