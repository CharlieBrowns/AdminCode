import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/service.index';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    public _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.configFormGroup();
  }
  configFormGroup() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, 
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
        ])  
      ),
      password2: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
    },
      this.passwordMatchValidator
    );

    this.form.setValue({
      name: 'ciro',
      email: 'ciriusblb@gmail.com',
      password: 'El4-gini',
      password2: 'El4-gini',
    });
  }
  sign_up() {
    console.log(this.findInvalidControls());
    if(this.form.invalid) {
      console.log('formulario invalido');
      return;
    }
    let user = new User(
      // this.form.value.name,
      this.form.value.email,
      this.form.value.password
    );
    console.log('user', user );
    // this._userService.sign_up(user)
    //   .subscribe((resp: any) => {
    //     console.log(resp);
    //     // this.router.navigate(['/login']);
    //   })
  }

  passwordMatchValidator(g: FormGroup) {
    if ( g.get('password').value !== g.get('password2').value ) {
      g.get('password2').setErrors({ mismatch: true });
      return { 'mismatch': true };
    }
    return null;
  }
  findInvalidControls() {
    const invalid = [];
    const controls = this.form.controls;
    for( const name in controls ) {
      if( controls[name].invalid ) {
        invalid.push(name);
      }
    }
    return invalid;
  }

}
