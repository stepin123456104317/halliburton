import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { Adal8Guard } from 'adal-angular8';
import{LoginComponent} from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpinnerComponent } from './core/spinner/spinner.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'spinner',component:SpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

@Injectable()
export class AppRoutingModule {

 }
