import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Request } from '../model/request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserServiceService {
  private userurl: string;

  constructor(private http: HttpClient) {
    this.userurl = 'http://localhost:8081/users';
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userurl);
  }

  public save(user: User) {
    return this.http.post<User>('http://localhost:8081/save', user);
  }

  public saveRequest(request: Request) {
    return this.http.post<Request>('http://localhost:8081/saveRequest', request);
  }

  public login(user: User): Observable<User> {
    return this.http.get<User>('http://localhost:8081/login', {
      params: {
        userid: user.userid,
        password: user.password
      }
    });
  }

  public isUserLoggedIn() {
    let user = localStorage.getItem('user');
    return !(user === null);
  }

  public logout() {
    localStorage.removeItem('user');
  }

  public update(user: User) {
    return this.http.put<User>('http://localhost:8081/update', user);
  }

  public delete(user: User) {
    return this.http.delete('http://localhost:8081/delete', {
      params: {
        userid: user.userid
      }
    });
  }
}
