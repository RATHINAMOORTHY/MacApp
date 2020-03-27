import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../project.service';
import { Project } from 'src/app/project';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects:Project[];
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (res:Project[])=>{
        this.projects=res;
      }

    );
  }

}
