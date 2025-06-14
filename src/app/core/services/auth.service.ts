import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/Auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080'

  constructor(
    private http: HttpClient
  ) {}

  login(payload: {username: string, password: string}){
    console.log("success")
    return this.http.post(
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
    return this.http.get<{ isAuthenticated: boolean }>(`${this.baseUrl}/auth/status`, { withCredentials: true })
    .pipe(map(response => response.isAuthenticated));
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
