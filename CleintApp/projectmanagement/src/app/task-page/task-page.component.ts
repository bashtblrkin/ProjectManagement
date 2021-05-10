import { Component, OnInit } from '@angular/core';
import {TaskService} from '../shared/services/task.service';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../shared/interfaces/interfaces';
import {Location} from '@angular/common';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  task: Task

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.taskService.getTaskById(this.route.snapshot.params['id']).subscribe( (task: Task) => {
      console.log(task)
      this.task = task
    })
  }

  goBack() {
    this.location.back()
  }
}
