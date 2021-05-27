import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../core/service/spinner.service';
// import { TestService } from '../test.service';
import { TestService } from '../test.service';
import { Adal8HTTPService, Adal8Service } from 'adal-angular8';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedIn=false;
  showLoading= false;

  constructor(
    private toastr: ToastrService,
    private testService: TestService,
    private spinnerService: SpinnerService,private adal8Service:Adal8Service
  ) { }

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
  }

  test(){
    this.spinnerService.requestStarted();
    this.testService.getData().subscribe((res: any) => {
      console.log(res);
      this.spinnerService.requestEnded();
    });
  }
  logout() {
    this.adal8Service.logOut();
    // console.log(""+this.adal8Service.userInfo.)
  }
}