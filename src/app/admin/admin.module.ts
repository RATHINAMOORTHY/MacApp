import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ContactUsComponent,
    MyProfileComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    ContactUsComponent,
    MyProfileComponent,
    AboutComponent
  ]
})
export class AdminModule { }
