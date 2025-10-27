import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../../../models/AuthState";


export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const selectLoading = createSelector(
    selectAuthState,
    (state) => state.loading
)

export const selectError = createSelector(
    selectAuthState,
    (state) => state.error
)

export const selectAccessToken = createSelector(
  selectAuthState,
  (state) => state.accessToken
);
