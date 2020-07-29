import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

 
  uri = 'http://localhost:3000';
 
  constructor(private http: HttpClient,private router: Router) { }

  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }  

  login(login: string, password: string) {
    this.http.get(this.uri + `/users?login=${login}`)
      .subscribe((resp: IUser[]) => {
        if (resp[0].password === password) {
          localStorage.setItem('token', 'token');
        }
      
      });
  }

  logout() {
    localStorage.removeItem('token');
  }  
}
