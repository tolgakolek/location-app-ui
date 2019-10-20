import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { UserLoginService } from '../services/user-login.service';
import { Block } from '../models/block.models';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    loginSuccess:boolean
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUser();
        if (currentUser) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        //this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        //original value false
        return true;
    }
}