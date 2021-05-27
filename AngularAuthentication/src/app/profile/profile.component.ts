import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { Adal8HTTPService, Adal8Service } from 'adal-angular8';

// const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // userName;

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor( private http: HttpClient, private adal8HttpService: Adal8HTTPService,
    private adal8Service: Adal8Service) { 
      
    // this.userName = this.adal8Service.userInfo.username;
    }

  ngOnInit() {
    console.log(this.adal8Service.userInfo.token);

  }
  
  // getProfile() {
  //   this.http.get(GRAPH_ENDPOINT)
  //     .toPromise().then(profile => {
  //       this.profile = profile;
  //       console.log(this.authService.acquireTokenSilent());
  //     });
  // }

}
