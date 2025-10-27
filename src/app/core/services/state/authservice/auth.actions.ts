import { createAction, props } from "@ngrx/store"
import {TokenResponse} from '../../../models/Auth.interface';


export const login =
    createAction(
        '[Auth] Login',
        props<{username: string, password: string}>()
    )

export const loginSuccess =
    createAction(
        '[Auth] Login Success',
      props<{ accessToken: string }>()
    )

export const loginFailure =
    createAction(
        '[Auth] Login Failure',
        props<{error: any}>()
    )

export const setRole =
    createAction(
      '[Auth] SetRole',
      props<{ role: string }>()
    )
