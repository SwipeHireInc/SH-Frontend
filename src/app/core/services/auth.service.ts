import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/Auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false
  private http = inject(HttpClient)
  private baseUrl = 'http://localhost:5432'

  constructor() {}

  login(payload: {email: string, password: string}): Observable<TokenResponse>{
    return this.http.post<TokenResponse>(`${this.baseUrl}/auth/login`, payload, {withCredentials:true})
  } // -> AuthController

  logout(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/auth/logout`, {}, { withCredentials: true });
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/auth/status`, { withCredentials: true });
  }
}
