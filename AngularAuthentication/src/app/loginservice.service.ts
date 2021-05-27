import { Injectable } from '@angular/core';
import { Adal8HTTPService, Adal8Service } from 'adal-angular8';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private adal8Service: Adal8Service) {
    // this.adal8Service.login()
  // this.checklogin();
   }
   checklogin(){
    // this.adal8Service.login()
   }
}
