import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
    return inject(UserService).isLoggedIn() ? true : inject(Router).navigate(['/login']);
};
