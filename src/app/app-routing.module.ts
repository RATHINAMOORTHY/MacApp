import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"",redirectTo:"dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
