import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from './auth.actions';
import { AuthService } from "./auth.service";
import {catchError, map, of, switchMap, tap, withLatestFrom} from "rxjs";
import { Router } from "@angular/router";
import {jwtDecode} from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
import {TokenResponse} from '../../../models/Auth.interface';
import {Store} from '@ngrx/store';
import {selectAccessToken} from './auth.selectors';



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
                router.navigate(["/company"])
              }

            })
        )
    },
    {functional:true,dispatch: false}
)

export const SetRoleEffect = createEffect(
  () => {
    const actions$ = inject(Actions);
    const http = inject(HttpClient);
    const store = inject(Store);

    return actions$.pipe(
      ofType(AuthActions.setRole),
      withLatestFrom(store.select(selectAccessToken)),
      switchMap(([action, accessToken]) =>
        http.post<TokenResponse>(
          'http://localhost:8080/auth/setRole',
          { role: action.role },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        ).pipe(
          map(res => AuthActions.loginSuccess({ accessToken: res.accessToken }))
        )
      )
    );
  },
  { functional: true }
);
