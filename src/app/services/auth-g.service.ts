import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserloginService } from './userlogin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGService implements CanActivate{

  constructor(private loginSvc:UserloginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.loginSvc.GetCurrentUser())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
