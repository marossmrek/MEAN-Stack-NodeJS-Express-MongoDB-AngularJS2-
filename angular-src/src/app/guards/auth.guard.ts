import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

 
@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private authServices : AuthService, private router: Router) {}
 
  canActivate() {
    if(this.authServices.loggedIn()) {
    	console.log('true')
      return true;
    } else {
    	console.log('false');
      this.router.navigate(['/login']);
      return false;
    }
  }
}