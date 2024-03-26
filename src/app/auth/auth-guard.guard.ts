import { CanActivateFn, CanMatchFn, Router} from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from './auth-service';  


export const authGuardGuard: CanMatchFn = (route, state) => {
  const router = inject( Router);
  const authService = inject(AuthService);

  if(authService.isLoggedIn){
    return true;
  }

  return router.createUrlTree(['/login']);
};
