import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../shared/services/project.service';
import {minProject} from '../shared/interfaces/interfaces';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  @Input() searchStr: string

  minProject$: Observable<minProject[]>

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.minProject$ = this.projectService.getProjects()
  }

}
