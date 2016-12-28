import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLoginComponent } from './test-login/test-login.component';
import { loginRouting } from './login-routing';

@NgModule({
  imports: [
    CommonModule,
    loginRouting
  ],
  declarations: [
    TestLoginComponent
  ]
})
export class LoginModule { }
