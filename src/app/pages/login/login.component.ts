import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
    
  access:unknown;

  constructor(private http: HttpClient, private route:Router) { }
  

  public login() {

    this.http.post<any>('http://127.0.0.1:3333/login', {access: this.access}).subscribe(
      result => {
        console.log(result); 
        this.route.navigateByUrl('/home')
      },
      
    )
}
}


