import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {minProject} from '../shared/interfaces/interfaces';
import {ProjectService} from '../shared/services/project.service';
import {DatasearchService} from '../shared/services/datasearch.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gant-projects',
  templateUrl: './gant-projects.component.html',
  styleUrls: ['./gant-projects.component.scss']
})
export class GantProjectsComponent implements OnInit {

  minProject$: Observable<minProject[]>
  searchStr: string = ''

  constructor(
    private projectService: ProjectService,
    private dataSearchService: DatasearchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.minProject$ = this.projectService.getProjects()
    this.dataSearchService.searchStr.subscribe(str => {
      this.searchStr = str
    })
  }


}
