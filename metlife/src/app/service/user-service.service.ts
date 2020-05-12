import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceService {
  private userurl: string;

  constructor(private http: HttpClient) {
    this.userurl = 'http://localhost:8080/users';
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userurl);
  }

  public save(user: User) {
    return this.http.post<User>('http://localhost:8080/save', user);
  }

  public login(user: User): Observable<User> {
    return this.http.get<User>('http://localhost:8080/login', {
      params: {
        userid: user.userid,
        password: user.password
      }
    });
  }

  public isUserLoggedIn() {
    let user = localStorage.getItem('userid');
    return !(user === null);
  }

  public logout() {
    localStorage.removeItem('userid');
  }

  public update(user: User) {
    return this.http.put<User>('http://localhost:8080/update', user);
  }

  public delete(user: User) {
    return this.http.delete('http://localhost:8080/delete', {
      params: {
        userid: user.userid
      }
    });
  }
}
