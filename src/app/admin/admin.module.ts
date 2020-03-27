import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import {ProjectComponent} from './project/project.component';
import { DashboardService } from '../dashboard.service';
import { ProjectService } from '../project.service';


@NgModule({
  declarations: [
    DashboardComponent,
    ContactUsComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent,
    ContactUsComponent,
    MyProfileComponent,
    AboutComponent
  ],
  
  providers: [DashboardService,ProjectService],
})
export class AdminModule { }
