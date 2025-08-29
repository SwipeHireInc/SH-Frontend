import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './core/services/authservice/auth.reducer';
import { provideHttpClient } from '@angular/common/http';
import { loginEffect, loginSuccess, SetRoleEffect } from './core/services/authservice/auth.effects';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideStore({
      auth: authReducer
    }),
    provideEffects({ loginEffect, loginSuccess, SetRoleEffect }),
    provideStoreDevtools({
    maxAge: 25
  }),]
};
