import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '@app/features/auth/containers/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }