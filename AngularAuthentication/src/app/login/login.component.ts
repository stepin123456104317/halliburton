// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, Injectable, OnInit } from '@angular/core';
import { Logger, CryptoUtils } from 'msal';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { Adal8HTTPService, Adal8Service } from 'adal-angular8';
import { environment } from "src/environments/environment";
import{Router} from '@angular/router'
import { LoginserviceService } from '../loginservice.service';
import { TokenInterceptorService } from '../token-interceptor.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  title = 'Authentication';
  isIframe = false;
  loggedIn = false;
  username: string = null;
  userEmail;
  flag:any;
  check:boolean;
  userDetails:any;
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  // config =  {
  //   tenant: 'lntts.onmicrosoft.com',
  //   clientId: 'd926a7c6-d4bb-412e-b391-4d1910cc7d9f',
  //   redirectUri : 'http://localhost:4200',
  //   endpoints: {
  //     'http://localhost:4200/': 'the id'
    
  //   }
  // }

  
  config =  {
    tenant: environment.tenant,
    clientId: environment.clientId,
    redirectUri : environment.redirectUri,
    endpoints:environment.endpoints ,
    // cacheLocation: AppConfig.settings.adalConfig.cacheLocation
  }

  
  constructor( private adal8HttpService: Adal8HTTPService,
    private adal8Service: Adal8Service,private router:Router,private loginservice:LoginserviceService,private tokenservice:TokenInterceptorService) { 
    this.dataSource.data = TREE_DATA;
    this.adal8Service.init(this.config);
        this.adal8Service.handleWindowCallback();
        console.log(this.adal8Service.userInfo);
        console.log(this.tokenservice);
        // console.log(this.adal8service.getcachedtoken());
// var token = 
// this.adal8Service.acquireToken('https://graph.microsoft.com').subscribe((token:
// string) => {this.adal8Service.login();
//   console.log(token)
// }


// )
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  ngOnInit() {
    // this.loginservice.checklogin();
    //  this.login()
  //  this.adal8Service.login();
    // this.router['/dashbord'];
    //  this.router.navigate(['/dashbord']);
    // console.log("hiiiiiiiiii"+this.adal8Service.getCachedToken); 
    // console.log("hello"+JSON.stringify(this.adal8Service.userInfo['profile']));
   this.userDetails=JSON.stringify(this.adal8Service.userInfo['profile']);
    
    localStorage.setItem("data",this.userDetails);
    
    var token=this.adal8Service.userInfo.token;
      // console.log(token);
    this.isIframe = window !== window.parent && !window.opener;
    // console.log(this.adal8Service.userInfo);
    // console.log("akasssshhhh"+this.adal8Service.userInfo.token);
    // console.log(this.username = this.adal8Service.userInfo['profile']['given_name']);
    // console.log(this.adal8Service.userInfo['profile']['given_name']);
     if(this.adal8Service.userInfo.authenticated){
       this.loggedIn = true;
      
      this.getting();
     }
     else{
        this.login();
        // console.log(this.adal8Service.userInfo['profile']['given_name']);
        this.loggedIn=false;
    }
  }

  userFunction(){
    console.log(this.adal8Service.userInfo['profile']['given_name']);
    this.username = this.adal8Service.userInfo['profile']['given_name'];
    this.userEmail = this.adal8Service.userInfo['userName'];

  }

  login() {

    this.adal8Service.login();
    // console.log(this.adal8Service.userInfo['profile']);
    // this.userDeatils=this.adal8Service.userInfo;
    // localStorage.setItem("tech", "JavaScript");
    // if(this.adal8Service.login){
      // this.router.navigate(['/dashboard']);
      //  this.getting();
      
    }
    tokencheck(){
      // var token=this.adal8Service.userInfo.token;
      // console.log(token);

    }
  getting(){
    this.router.navigate(['/dashboard']);
  }


  logout() {
    this.adal8Service.logOut();
  }

 
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'OSSwellPackers',
    children: [
      {name: 'SPOS'},
      {name: 'SPOSL'},
      {name: 'SPLSR'},
    ]
  }, 
];

