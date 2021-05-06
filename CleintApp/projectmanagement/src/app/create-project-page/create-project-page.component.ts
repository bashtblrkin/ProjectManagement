import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../shared/services/project.service';
import {NewProject} from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-create-project-page',
  templateUrl: './create-project-page.component.html',
  styleUrls: ['./create-project-page.component.scss']
})
export class CreateProjectPageComponent implements OnInit {

  form: FormGroup
  submitted: boolean = false

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  createProject() {
    this.submitted = true

    if (this.form.invalid)
    {
      return
    }

    const project: NewProject = {
      name: this.form.value.name,
      description: this.form.value.description,
      created_at: new Date()
    }

    this.projectService.createProject(project).subscribe(res => {
      this.submitted = false
      this.form.reset()

    })
  }
}
