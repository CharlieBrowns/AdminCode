import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { map, catchError, } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { User } from '../models/user.model';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  token: string;

  constructor(
    private http:HttpClient,
    private router: Router
  ) { 
    this.loadStorage();
  }

  getUserData () {
    if( localStorage.getItem('token') ) {

      return jwt_decode(localStorage.getItem('token'));


    } else {
      console.log("no esta permitido")
    }
  }

  loadStorage() {
    if( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
    console.log("cargando storage ", this.token);
  }
  saveStorage(token:string, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    // this.token = token;
    // this.user = user;
  }
  isloged() {
    return (this.token.length > 5) ? true: false;
  }

  sign_up(user: User) {
    const url = environment.URL + '/auth/register';
    return this.http.post(url, user )
      .pipe(map((resp: any) => {
        return resp;
      }), catchError(err => {
        return throwError(err);
      }))
  }
  sign_in(user: User, remember: boolean = false) {
    // if( remember ) {
    //   localStorage.setItem('email', user.email);
    // } else {
    //   localStorage.removeItem('email');
    // }

    console.log("estoy enviando los datos : user" , user.email);

    let url = environment.URL + '/auth/login/admin';
    console.log("#la url :" ,url)
    return this.http.post(url, user)
      .pipe(map((resp: any) => {
        console.log("my response : " , resp)
        this.saveStorage(resp.token, resp.user);
          this.router.navigate(['/welcome']);

        return true;
      }), catchError(err => {
        return throwError(err);
      }))

    //prueba 
    // this.token = "asdasdjanskjdnaskbdasjbdjashbdjhasbdjhasbdj";
    // this.saveStorage(this.token, user);
    // this.router.navigate(['/welcome']);


  }
  logout(){
    this.token='';
    this.user=null;

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
