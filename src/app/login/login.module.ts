import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../share/service/auth.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
