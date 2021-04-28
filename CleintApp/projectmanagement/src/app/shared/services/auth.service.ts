import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Account} from '../interfaces/interfaces';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(account: Account): Observable<any> {
    return this.http.post(`${environment.authDbUrl}/accounts/create`, account)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(error))
      )
  }

}
