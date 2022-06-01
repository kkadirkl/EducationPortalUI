import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // sorun var düzeltilecek
  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let token = localStorage.getItem('token');
    // let newRequest:HttpRequest<any>;
    // newRequest = request.clone({
    //   headers : request.headers.set("Authorization","Bearer "+ token)
    // })    
    // return next.handle(newRequest);

    const currentUser = this.authService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;

    if (isLoggedIn) {
      request = request.clone({
        headers:request.headers.set("Authorization","Bearer " + currentUser.token)
      })
    }

    return next.handle(request);
  }
}
