import { Component, OnInit } from '@angular/core';

import { AuthService } from '../share/service/auth.service';
import { IUser } from '../share/interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: IUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = {lodin:'', password: ''};
  }

  logIn() {
    // console.log(this.login, this.password);
    this.authService.login(this.loginForm.lodin, this.loginForm.password)
  }
}
