import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './core/services/auth.reducer';
import { provideHttpClient } from '@angular/common/http';
import { loginEffect, loginSuccess } from './core/services/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      auth: authReducer
    }),
    provideEffects({ loginEffect, loginSuccess }),
    provideStoreDevtools({
    maxAge: 25
  })]
};
