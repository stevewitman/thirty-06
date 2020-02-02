import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '@nx06/core-data';

@Component({
  selector: 'nx06-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  @Input() projects: Project[];
  @Output() selecting: EventEmitter<any> = new EventEmitter


  constructor() { }

  ngOnInit() {
  }

}
