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
  project:Project[];
  newProject: Project = new Project();
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (res:Project[])=>{
        this.project=res;
      }
    );
  }

  onSaveClick()
  {
      console.log("inside the Save");
      console.log(this.newProject);
      this.projectService.createNewProject(this.newProject).subscribe((response) => {
        //Add Project to Grid
        var p: Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        this.project.push(p);
  
        //Clear New Project Dialog - TextBoxes
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
      }, (error) => {
        console.log(error);
      });
    }
  }
