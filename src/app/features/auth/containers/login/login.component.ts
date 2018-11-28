import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { emailControl } from '@app/utils/formValidators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: FormControl = emailControl;
  password: FormControl = new FormControl('');
  form: FormGroup;
  

  constructor(
    private _builder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.form = this._builder.group({
      email: this.email,
      password: this.password
    })
  }

  send() {
    console.log('form valid->', this.form.valid);
    console.log('from form->', this.email.value , this.password);
    console.log('from props->', this.email , this.password);
    const user = {
      user: {email: this.email.value , password: this.password.value}
    };
    localStorage.setItem('ng-auth', JSON.stringify(user))
    this._router.navigate(['index'])
  }
}
