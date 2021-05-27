import { Component, Injectable, OnInit } from '@angular/core';
import { Logger, CryptoUtils } from 'msal';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { Adal8HTTPService, Adal8Service } from 'adal-angular8';
import { environment } from "../../src/environments/environment";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  ngOnInit() {
    // debugger;
    // this.login();
    // this.isIframe = window !== window.parent && !window.opener;
    // console.log(this.adal8Service.userInfo);
    // if(this.adal8Service.userInfo.authenticated){
    //   this.loggedIn = true;
    }
    // else
    // this.loggedIn = false;
    // this.flag=1;
    // while(this.flag==1)
    // {
    // this.login();
    // this.flag=0;
    // }
    // debugger
   
    // this.userFunction()

     
     
     
  }

  