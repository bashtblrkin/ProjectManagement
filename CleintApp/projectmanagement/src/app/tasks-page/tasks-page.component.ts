import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TaskUser} from '../shared/interfaces/interfaces';
import {TaskService} from '../shared/services/task.service';
import {DatasearchService} from '../shared/services/datasearch.service';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  tasks$: Observable<TaskUser[]>
  searchStr: string = ''

  constructor(
    private taskService: TaskService,
    private dataSearchService: DatasearchService
  ) { }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasksByUser()
    this.dataSearchService.searchStr.subscribe(str => {
      this.searchStr = str
    })
  }

}
