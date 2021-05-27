import { Component, OnInit } from '@angular/core';
import { Adal8HTTPService, Adal8Service } from 'adal-angular8';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   userDetails:any;
   loggedIn=false;
   name:any;
   name1:any;
   userProfile:any;
  constructor(private adal8Service:Adal8Service) { }

  ngOnInit(): void {
    if(this.adal8Service.userInfo.authenticated){
      this.loggedIn = true;
    //  this.getting();
    }
    else{
      //  this.login();
       // console.log(this.adal8Service.userInfo['profile']['given_name']);
       this.loggedIn=false;
   }
    // this.userDetails=JSON.stringify(this.adal8Service.userInfo['profile']);
    this.userProfile=localStorage.getItem("data");
    console.log("from localstorage"+this.userProfile);
    this.name=JSON.parse(this.userProfile).name;
  }
  logout() {
    this.adal8Service.logOut();
    // console.log(""+this.adal8Service.userInfo.)
    localStorage.clear();
  }
}
