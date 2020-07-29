import { Component, OnInit } from '@angular/core';

import { AuthService } from '../share/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm: any = {
    login = '';
    password = '';
  //  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logIn() {
    console.log(this.login, this.password);
    this.authService.login(this.login, this.password)
  }
}
