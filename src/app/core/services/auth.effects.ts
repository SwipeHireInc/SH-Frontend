import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as AuthActions from '../services/auth.actions';
import { AuthService } from "./auth.service";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";



export const loginEffect = createEffect(
    () => {
        const actions$ = inject(Actions)
        const service = inject(AuthService)

        return actions$.pipe(
            ofType(AuthActions.login),
            switchMap(action =>
                service.login({ username: action.username, password: action.password })
                .pipe(
                    map(() => AuthActions.loginSuccess()),
                    catchError(error => of(AuthActions.loginFailure({ error })))
                )
            )
        )
    }, {functional:true}
)

export const loginSuccess = createEffect(
    () => {
        const actions$ = inject(Actions)
        const router = inject(Router)

        return actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(() => {
                router.navigate(['/main']);
            })
        )
    },
    {functional:true,dispatch: false}
)
