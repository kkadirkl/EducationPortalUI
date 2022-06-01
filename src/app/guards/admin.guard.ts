import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {
  
  constructor(private authService:AuthService,private router:Router) {
    
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authService.currentUserValue;
      if (currentUser && currentUser.token != null && currentUser.userEmail === environment.adminEmail) {      
        return true;
      }
      this.router.navigate(['/auth/login'],{queryParams:{returnUrl:state.url}});
      return false;
  }
  
}
