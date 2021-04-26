import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Account} from '../interfaces/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(account: Account): Observable<any> {
    console.log('Post request')
    return this.http.post(`${environment.authDbUrl}/accounts/create`, account)
  }
}
