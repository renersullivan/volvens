import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from './token.service';

const AUTH_API = 'http://138.68.232.90:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {

    return this.http.post<any>('http://138.68.232.90:3333/login', {email, password})
  }

  // refreshToken(token: string) {
  //   return this.http.post(AUTH_API + 'refreshtoken', {
  //     refreshToken: token
  //   }, httpOptions);
  // }
}