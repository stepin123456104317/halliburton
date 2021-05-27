import { Injectable,Injector} from '@angular/core';
import{HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http'
import { Adal8HTTPService, Adal8Service } from 'adal-angular8';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  
  

  constructor(private adal8service:Adal8Service,private adal8sevice:Adal8Service){
    

   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    req = req.clone({ headers: req.headers.set('X-CRSP-TOKEN', 'ToBeImplemented') });

    // this line always returns null
    
    const authToken = this.adal8service.getToken();
    console.log(authToken)
    
    if (authToken) {
        req = req.clone({ headers: req.headers.set('Authorization', `Bearer 
        ${authToken}`) });
    }

  //  console.log("mummy"+JSON.stringify(req.headers));
    return next.handle(req);
}
}