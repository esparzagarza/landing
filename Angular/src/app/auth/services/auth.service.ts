import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor(private http: HttpClient) { }

  setLSItem(resp: AuthResponse) {
    localStorage.setItem('token', resp.token!);
    this._user = {
      uid: resp.uid!,
      name: resp.name!
    }
  }

  login(email: string, password: string) {

    const url: string = `${this.baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => { if (resp.ok) this.setLSItem(resp); }),
        map(resp => resp.ok),
        catchError((err) => of(err.error.msg))
      );
  }

  register(name: string, email: string, password: string) {

    const url: string = `${this.baseUrl}/auth/new`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => { if (resp.ok) this.setLSItem(resp); }),
        map(resp => resp.ok),
        catchError((err) => of(err.error.msg))
      );

  }

  validateToken(): Observable<boolean> {
    const url: string = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '');
    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => { this.setLSItem(resp); return resp.ok; }),
        catchError(err => of(false))
      );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
