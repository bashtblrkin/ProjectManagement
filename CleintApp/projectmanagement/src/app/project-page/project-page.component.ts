import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProjectService} from '../shared/services/project.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Project, Task,  UserToProject} from '../shared/interfaces/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';




@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  projectId: string
  project: Project
  submitted: boolean = false
  formAddUser: FormGroup
  openFormAddUser: boolean = false
  tasks$: Observable<Task[]>

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
          return this.projectService.getProjectById(params['id'])
      })
    ).subscribe( (project: Project[]) => {
      this.project = project[0]
    })
    this.tasks$ = this.projectService.getTasks(this.route.snapshot.params['id'])
  }


  toggleFormAddUser() {
    this.openFormAddUser = !this.openFormAddUser
    if (!this.formAddUser) {
      this.formAddUser = new FormGroup({
        email: new FormControl('', [
          Validators.email,
          Validators.required
        ]),
        role: new FormControl('1')
      })
    }
  }

  addUser() {
    if (this.formAddUser.invalid)
    {
      return
    }
    this.submitted = true

    const userToProject: UserToProject = {
      email: this.formAddUser.value.email,
      ProjectId: this.route.snapshot.params['id'],
      RoleId: this.formAddUser.value.role
    }

    this.projectService.addUser(userToProject).subscribe(response => {
        this.formAddUser.reset()
        this.submitted = false
        this.openFormAddUser = false
    }, error => {
      if (error.error === 'EMAIL_NOT_FOUND')
      {
        this.formAddUser.get('email').setErrors({
          uniqEmail: true
        })
        this.submitted = false
      }
      if (error.error === 'USER_ALREADY_EXIST')
      {
        this.formAddUser.get('email').setErrors({
          alreadyExistEmail: true
        })
        this.submitted = false
      }
    })
  }
}
