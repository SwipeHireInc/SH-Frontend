import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/Auth.interface';
import {User} from '../dto/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string | null = null;
  private baseUrl = 'http://localhost:8080'

  constructor(
    private http: HttpClient
  ) {}

  login(payload: {username: string, password: string}){
    return this.http.post<TokenResponse>(
      `${this.baseUrl}/auth/login`,
      payload,
      {withCredentials:true}).pipe(tap(res => this.setAccessToken(res.accessToken)))
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

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getMe(): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/api/me`);
  }
}
