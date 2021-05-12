import { Component, OnInit } from '@angular/core';
import {TaskService} from '../shared/services/task.service';
import {ActivatedRoute} from '@angular/router';
import {Task, UpdateTask} from '../shared/interfaces/interfaces';
import {Location} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  task: Task
  form: FormGroup
  submitted: boolean = false
  update: boolean = false

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.taskService.getTaskById(this.route.snapshot.params['id']).subscribe( (task: Task) => {
      this.task = task
      if (this.task.mytask)
      {
        this.form = new FormGroup({
          status: new FormControl('1', [Validators.required])
        })
      }
    })

  }

  goBack() {
    this.location.back()
  }

  updateStatus() {
    console.log(this.form.value)

    if(this.form.invalid)
    {
      return
    }

    this.submitted = true
    const task: UpdateTask = {
      id: this.route.snapshot.params['id'],
      status: this.form.value.status
    }

    this.taskService.updateTaskStatus(task).subscribe(resp => {
      this.submitted = false
      this.update = true
      console.log(resp)
    })
  }
}
