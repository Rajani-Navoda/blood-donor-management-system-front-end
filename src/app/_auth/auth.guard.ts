import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { inject } from '@angular/core';
import { UserService } from '../_services/user.service';

export const authGuard: CanActivateFn = (route, state) => {

    const authService = inject(UserAuthService);
    const router = inject(Router);
    const userService = inject(UserService);
    
    if(authService.getToken() != null) {
        const allowedUserTypes = route.data['userTypes'] as Array<String>;

        if (allowedUserTypes) {
            const match = userService.userTypeMatch(allowedUserTypes);

            if(match) {
                return true;
            } else {
                router.navigate(['/**']);
                return false;
            }
        }
    }
    router.navigate(['/login']);
    return false;
};
