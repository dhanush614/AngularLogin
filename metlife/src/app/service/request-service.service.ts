import { Injectable } from '@angular/core';
import { Request } from '../model/request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestServiceService {

  private requesturl: string;

  constructor(private http: HttpClient) {
    this.requesturl = 'http://localhost:8080/getRequests';
  }

  public findAll(): Observable<Request[]> {
    return this.http.get<Request[]>(this.requesturl);
  }

  public saveRequest(request: Request) {
    return this.http.post<Request>('http://localhost:8080/saveRequest', request);
  }


}
