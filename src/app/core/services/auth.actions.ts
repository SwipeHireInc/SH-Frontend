import { createAction, props } from "@ngrx/store"
import { TokenResponse } from "../models/Auth.interface"


export const login = 
    createAction(
        '[Auth] Login',
        props<{username: string, password: string}>()
    )

export const loginSuccess = 
    createAction(
        '[Auth] Login Success'
    )

export const loginFailure =
    createAction(
        '[Auth] Login Failure',
        props<{error: any}>()
    )