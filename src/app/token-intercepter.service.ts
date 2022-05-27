import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class TokenIntercepterService implements HttpInterceptor {

  intercept(req, next )
  {
    let logSer = this.injector.get(LoginService)
    let tokenizedRequest = req.clone({
      setHeaders:{
        Authorization: `Bearer ${logSer.getToken()}`
      }
    })
    return next.handle(tokenizedRequest)
  }
  constructor(private injector:Injector ) { }
}
