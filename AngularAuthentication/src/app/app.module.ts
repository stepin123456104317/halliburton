import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
 import { ToastrModule } from 'ngx-toastr';
import { Adal8HTTPService, Adal8Service, Adal8Guard } from 'adal-angular8';
import { MatToolbarModule, MatButtonModule, MatListModule, MatSidenavModule,  MatTreeModule, MatMenuModule} from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{LoginComponent} from './login/login.component'
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{TokenInterceptorService} from './token-interceptor.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
export const protectedResourceMap: [string, string[]][] = [
  ['https://graph.microsoft.com/v1.0/me', ['user.read']]
];

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
      HeaderComponent,
     FooterComponent,
    LoginComponent,
    
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule, 
    MatSidenavModule, 
    MatIconModule,
    AppRoutingModule,
    MatTreeModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates:true
    }),
    MatMenuModule,
    // MsalModule.forRoot({
    //   auth: {
    //     clientId: 'd926a7c6-d4bb-412e-b391-4d1910cc7d9f',
    //     authority: "https://login.microsoftonline.com/lntts.onmicrosoft.com",
    //     validateAuthority: true,
    //     redirectUri: "http://localhost:4000/",
    //     postLogoutRedirectUri: "http://localhost:4000/",
    //     navigateToLoginRequestUrl: true,
    //   },
    //   cache: {
    //     cacheLocation: "localStorage",
    //     storeAuthStateInCookie: isIE, // set to true for IE 11
    //   },
    // },
      // {
      //   popUp: !isIE,
      //   consentScopes: [
      //     "user.read",
      //     "openid",
      //     "profile",
      //     "api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user"
      //   ],
      //   unprotectedResources: ["https://www.microsoft.com/en-us/"],
      //   protectedResourceMap,
      //   extraQueryParameters: {}
      // }),
    NgbModule
  ],
  providers: [
    Adal8Service,
        { provide: Adal8HTTPService, useFactory: Adal8HTTPService.factory, deps: [HttpClient, Adal8Service] } ,Adal8Guard,
        {
          provide:HTTP_INTERCEPTORS,
          useClass:TokenInterceptorService,
          multi:true
        }
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
