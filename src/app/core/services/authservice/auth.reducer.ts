import { createReducer, on, State } from "@ngrx/store";
import { AuthState } from "../../models/AuthState";
import * as AuthActions from "./auth.actions"


export const initialState: AuthState = {
    token: null,
    loading: false,
    error: null,
    accessToken: null
}

export const authReducer = createReducer(
    initialState,

    on(AuthActions.login, state => ({
        ...state,
        loading: true,
        error: null
        })
    ),

    on(AuthActions.loginSuccess, state =>
         ({ ...state, loading: false })),

    on(AuthActions.loginFailure, (state, {error}) => ({
        ...state,
        loading:false,
        error
    })),

    on(AuthActions.loginSuccess, (state, { accessToken }) => ({
      ...state,
      accessToken: accessToken
    })),

)
