import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from './connexion.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuardService implements CanActivate {

  constructor(private connexionService: ConnexionService,
    private router: Router) {

   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree |Observable<boolean> {
    if (this.connexionService.isConnected) {
      return true
    } else {
      this.router.navigateByUrl('/connexion')
      return false
    }
  }

}
