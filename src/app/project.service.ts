import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private httpClient:HttpClient) { }

  getAllProjects():Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/projects");
  }
  
  createNewProject(newProject: Project):Observable<Project>
  {
    console.log("inside the API");
    console.log(newProject);
    return this.httpClient.post<Project>("/api/projects",newProject);
  }
}
