import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Global } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API = Global.url;
  public validation = false;

  constructor(private readonly http: HttpClient) {}

  login(user: User): Observable<any> {
    const body = user;
    return this.http.post<any>(this.API + 'login', body, {
      observe: 'response',
      withCredentials: true,
    });
  }

  tokenVerify(): Observable<any> {
    return this.http.post<any>(
      this.API + 'token-verification',
      {},
      {
        observe: 'response',
        withCredentials: true,
      }
    );
  }

  isLoggedIn(): Observable<boolean> {
    return new Observable<boolean>((observe) => {
      this.tokenVerify().subscribe((response) => {
        if (response.body.tokenValidation) {
          observe.next(true);
        } else {
          observe.next(false);
        }
      });
    });
  }
}
