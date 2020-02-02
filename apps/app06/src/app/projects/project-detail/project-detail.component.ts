import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'nx06-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  originalTitle;
  currentProject;

  @Input() form: FormGroup;
  @Input() set project(value) {
    if (value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
