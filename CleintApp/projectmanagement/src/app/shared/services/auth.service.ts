import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Account, Token} from '../interfaces/interfaces';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, delay, tap} from 'rxjs/operators';
import {AUTH_API_URL} from '../../app-injection-tokens';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

export const ACCESS_TOKEN_KEY = 'projectmanagement_access_token'

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(AUTH_API_URL) private apiUrl: string,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  register(account: Account): Observable<any> {
    return this.http.post(`${environment.authApi}/accounts/create`, account)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(error))
      )
  }

  login(email: string, password: string): Observable<Token> {
      return this.http.post<Token>(`${this.apiUrl}api/auth/login`, {
        email, password
      }).pipe(
        tap(token => {
          localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token)
        })
      )
  }

  isAuthenticated(): boolean {
      var token = localStorage.getItem(ACCESS_TOKEN_KEY)
      return token && !this.jwtHelper.isTokenExpired(token)
  }

  logout() {
      localStorage.removeItem(ACCESS_TOKEN_KEY)
      this.router.navigate([''])
  }
}
