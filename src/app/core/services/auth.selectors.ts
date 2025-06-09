import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../models/AuthState";


export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectToken = createSelector