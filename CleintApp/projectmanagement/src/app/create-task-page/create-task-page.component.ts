import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AddTask, UsersOfProject} from '../shared/interfaces/interfaces';
import {ProjectService} from '../shared/services/project.service';
import {formatDate} from '@angular/common';
import {FlatpickrDefaultsInterface} from 'angularx-flatpickr/flatpickr-defaults.service';
import flatpickr from 'flatpickr';
import {Russian} from 'flatpickr/dist/l10n/ru';

function flatpickrFactory() {
  flatpickr.localize(Russian)
  return flatpickr
}

@Component({
  selector: 'app-create-task-page',
  templateUrl: './create-task-page.component.html',
  styleUrls: ['./create-task-page.component.scss']
})
export class CreateTaskPageComponent implements OnInit {

  formAddTask: FormGroup
  usersOfProject$: Observable<UsersOfProject[]>
  submitted: boolean = false
  created: boolean = false

  options: FlatpickrDefaultsInterface = {
    enable: [
      {
        from: '2019-04-01',
        to: '2025-05-01'
      }
    ]
  }

  constructor(
    public route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.usersOfProject$ = this.projectService.getUsersOfProject(this.route.snapshot.params['id'])

    this.formAddTask = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      executor: new FormControl('', [Validators.required]),
      priority: new FormControl('', [Validators.required])
    })
    flatpickrFactory()
  }


  addTask() {
    if (this.formAddTask.invalid)
    {
      return
    }
    this.submitted = true
    const task: AddTask = {
      UserId: this.formAddTask.value.executor,
      name: this.formAddTask.value.name,
      description: this.formAddTask.value.description,
      start_date: formatDate(this.formAddTask.value.start_date, 'yyyy-MM-dd HH:mm:ss', 'ru'),
      end_date: formatDate(this.formAddTask.value.end_date, 'yyyy-MM-dd HH:mm:ss', 'ru'),
      PriorityId: this.formAddTask.value.priority,
      ProjectId: this.route.snapshot.params['id']
    }

    this.projectService.addTask(task).subscribe(res => {
      this.formAddTask.reset()
      this.submitted = false
      this.created = true
    })
  }
}
