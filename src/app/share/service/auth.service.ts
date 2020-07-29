import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})


export class AuthService {    
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

 
  private readonly url = 'http://localhost:3000';
 
  constructor(private http: HttpClient,private router: Router) {
    this.currentUserSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable(); 
  }

  get isAuthenticated(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

  login(login: string, password: string) {
    this.http.get(this.url + `/users?login=${login}`)
      .subscribe((resp: IUser[]) => {
        const user = resp[0];

        if (user.password === password) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);

          this.router.navigate(['/task']);
        }
      
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }  
}
