import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { emailControl } from '@app/utils/formValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: FormControl = emailControl;
  password: FormControl = new FormControl('');
  form: FormGroup;
  
  @Output() userLogin: EventEmitter<{user: {email: string, password: string}}> = new EventEmitter();

  constructor(
    private _builder: FormBuilder
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
    this.userLogin.emit(this.form.value);
  }
}
