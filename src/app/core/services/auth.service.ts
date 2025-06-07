import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/Auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5432'

  constructor(
    private http: HttpClient
  ) {}

  login(payload: {username: string, password: string}): Observable<TokenResponse>{
    return this.http.post<TokenResponse>(
      `${this.baseUrl}/auth/login`,
      payload, 
      {withCredentials:true})
  } // -> AuthController

  logout(): Observable<void> {
    return this.http.post<void>(
      `${this.baseUrl}/auth/logout`,
      {},
      { withCredentials: true });
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(
      `${this.baseUrl}/auth/status`,
      { withCredentials: true });
  }

  // maybe for localstorage
  // setToken(token: string): void {
  //   localStorage.setItem('authToken', token);
  // }

  // getToken(): string | null {
  //   return localStorage.getItem('authToken');
  // }

  // removeToken(): void {
  //   localStorage.removeItem('authToken');
  // }
}
