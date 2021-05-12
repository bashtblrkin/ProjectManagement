import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  declOfNum(number: number, words: string[]): string {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}api/users/update`, user)
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}api/users/user`, {
      params: new HttpParams().set('id', id)
    })
  }
}
