import { createAction, props } from "@ngrx/store"
import { TokenResponse } from "../models/Auth.interface"


export const login = 
    createAction(
        '[Auth] Login',
        props<{username: String, password: String}>()
    )

export const loginSuccess = 
    createAction(
        '[Auth] Login Success',
        props<TokenResponse>()
    )
    
export const loginFailure =
    createAction(
        '[Auth] Login Failure',
        props<Error>()
    )