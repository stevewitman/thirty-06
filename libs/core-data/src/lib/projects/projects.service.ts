import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects = [
    {
      "id": 1,
      "title": "project 1",
      "details": "this is project 1",
      "importanceLevel": 100
    },
    {
      "id": 2,
      "title": "project 2",
      "details": "this is project 2",
      "importanceLevel": 75
    },
    {
      "id": 3,
      "title": "project 3",
      "details": "this is project 3",
      "importanceLevel": 50
    }
  ]

  constructor() { }

  getProjects() {
    return this.projects
  }
}
