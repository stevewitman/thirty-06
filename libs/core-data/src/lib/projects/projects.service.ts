import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from '@nx06/core-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private URL = 'https://server-30-x-30.herokuapp.com/projects'

  constructor(private httpClient: HttpClient) { }

  getProjects() {
    return this.httpClient.get(this.URL);
  }

  createProject(project: Project) {
    return this.httpClient.post(this.URL, project);
  }

  updateProject(project: Project) {
    return this.httpClient.patch(this.URL + '/' + project.id, project)
  }

  deleteProject(id: string) {
    return this.httpClient.delete(this.URL + '/' + id)
  }

}
