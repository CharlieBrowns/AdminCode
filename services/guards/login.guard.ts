import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( 
    public _userService: UserService,
    private router: Router
  ) {

  }
  canActivate(): boolean {
    if( this._userService.isloged()) {
      console.log("dejar pasar");
      return true;
    } else {
      console.log("bloqueado por el guard");
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
