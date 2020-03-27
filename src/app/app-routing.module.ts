import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { ContactUsComponent } from './admin/contact-us/contact-us.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { ProjectComponent } from './admin/project/project.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"project",component:ProjectComponent},
  {path:"about",component:AboutComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"my-profile",component:MyProfileComponent},
  {path:"",redirectTo:"dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
