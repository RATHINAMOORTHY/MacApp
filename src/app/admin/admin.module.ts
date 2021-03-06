import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import {ProjectComponent} from './project/project.component';
import { DashboardService } from '../dashboard.service';
import { ProjectService } from '../project.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ContactUsComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    DashboardComponent,
    ContactUsComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectComponent
  ],
  
  providers: [DashboardService],
})
export class AdminModule { }
