import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.isAuthenticated()
    .pipe(
      map(isauth => {
        if(isauth){
        return true
        } else {
        router.navigate(['/login'])
        return false
        }
      }),
      catchError(() => {
        router.navigate(['/login']);
        return of(false);
      })
    )
};
