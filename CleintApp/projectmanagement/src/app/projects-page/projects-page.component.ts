import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from '../shared/services/project.service';
import {minProject} from '../shared/interfaces/interfaces';
import {Observable} from 'rxjs';
import {DatasearchService} from '../shared/services/datasearch.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  minProject$: Observable<minProject[]>
  searchStr: string

  constructor(
    private projectService: ProjectService,
    private dataSearchService: DatasearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.minProject$ = this.projectService.getProjects()
    this.minProject$.subscribe(projects => {
      console.log(projects)
    })
    this.dataSearchService.searchStr.subscribe(str => {
      this.searchStr = str
    })
  }

  navigateToNewProject() {
    this.router.navigate(["/user", "projects", "create"])
  }
}
