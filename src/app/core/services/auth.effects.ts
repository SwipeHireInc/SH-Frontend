import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from '../services/auth.actions';
import { AuthService } from "./auth.service";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import {jwtDecode} from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import {TokenResponse} from '../models/Auth.interface';



export const loginEffect = createEffect(
    () => {
        const actions$ = inject(Actions)
        const service = inject(AuthService)

      return actions$.pipe(
        ofType(AuthActions.login),
        switchMap(action =>
          service.login({ username: action.username, password: action.password }).pipe(
            map(res => AuthActions.loginSuccess({ accessToken: res.accessToken })),
            catchError(error => of(AuthActions.loginFailure({ error })))
          )
        )
      );

    }, {functional:true}
)

export const loginSuccess = createEffect(
    () => {
        const actions$ = inject(Actions)
        const router = inject(Router)

        return actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(action => {
              const token = action.accessToken
              const decode: any = jwtDecode(token)

              if(!decode.role){
                router.navigate(["/choose"])

              }

              if(decode.role === "applicant"){
                router.navigate(["/applicant"])
              }

              if(decode.role === "employer"){
                router.navigate(["/employer"])
              }

            })
        )
    },
    {functional:true,dispatch: false}
)

export const SetRoleEffect = createEffect(
  () => {
    const actions$ = inject(Actions)
    const http = inject(HttpClient)

    return actions$.pipe(
      ofType(AuthActions.setRole),
      switchMap(action =>
        http.post<TokenResponse>('http://localhost:8080/auth/setRole', { role: action.role }, { withCredentials: true })
          .pipe(
            map(res => AuthActions.loginSuccess({accessToken: res.accessToken}))
          )
      )
    )
  },
  { functional: true }
)
