import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
    
  access:unknown;
  email!:string;
  password!:string;
  showTip:boolean = false;
  

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  closeTip(){
    this.showTip = false
  }

  shouldShowTip(){
    this.showTip = true

    setTimeout(()=> this.closeTip(), 5000)
  }

  public login() {
    this.authService.login(this.email, this.password).subscribe( (data) => {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveRefreshToken(data.token);
      this.tokenStorage.saveUser(data.user.id);

      this.router.navigateByUrl('/home')

    },
    (err) => this.shouldShowTip(),
    
  );
}

}


