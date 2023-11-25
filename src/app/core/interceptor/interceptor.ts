import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
  constructor(private tokenStorage: TokenStorageService, private router:Router) { }
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenStorage.getToken()) {
      const authRequest = request.clone(
        { setHeaders:{'Authorization': `Bearer ${this.tokenStorage.getToken()}`}});
 
      return next.handle(authRequest);
    } else {
      this.router.navigateByUrl('/login')
      return next.handle(request);
    }
  }
}
 