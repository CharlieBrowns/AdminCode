import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/service.index';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  remember: boolean = false;
  email: string;
  constructor(
    private router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.verifyRemember();
  }


  verifyRemember() {
    this.email = localStorage.getItem('email') || '';
    if( this.email.length > 1 ) {
      this.remember = true;
    }
  }
  sign_in( form: NgForm) {
    if( form.invalid ) {
      return;
    }
    let user = new User(form.value.email, form.value.password);
    // console.log(this.remember);
    // console.log(user);

    // this._userService.sign_in(user, form.value.remember)
    //   .subscribe((resp: any) => {
    //     console.log(resp);
    //     // this.router.navigate(['/welcome']);
    //   })

    // prueba
    this._userService.sign_in(user, form.value.remember).subscribe(data => {
      console.log("los datos ... " , data);
    });

    // console.log("los datosss : " , data)

  }

}
