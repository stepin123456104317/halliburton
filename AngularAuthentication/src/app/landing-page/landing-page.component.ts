import { Component, Injectable, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { Adal8HTTPService, Adal8Service } from 'adal-angular8';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
@Injectable()
export class LandingPageComponent implements OnInit {

  //userName;
  constructor( private http: HttpClient, private adal8HttpService: Adal8HTTPService,
    private adal8Service: Adal8Service) { }

  ngOnInit() {
    // console.log(this.adal8Service.userInfo.token);
    // this.userName = this.adal8Service.userInfo.username;
  }

}
