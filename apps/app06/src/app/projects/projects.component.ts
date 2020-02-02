import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProjectsService, Project } from '@nx06/core-data';

@Component({
  selector: 'nx06-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$;
  selectedProject: Project;
  form: FormGroup;
  

  constructor(private projectsService: ProjectsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getProjects();
    this.initForm();
  }


  private initForm() {
    this.form = this.fb.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])]
    })
  }

  getProjects() {
    this.projects$ = (this.projectsService.getProjects())
  }

  selectProject(project: Project) {
    this.selectedProject = project;
    this.form.patchValue(project);
  }

}
