import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Account} from '../../interfaces/interfaces';
import {AuthService} from '../../services/auth.service';
import {ConfirmedValidators} from '../../validators/confirmed.validators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  formRegistration: FormGroup
  formLogin: FormGroup
  openRegistrationModal: boolean = false
  submitted: boolean = false
  openSignInModal: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
  }

  ngOnInit(): void {
    this.formRegistration = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      passwordConfirm: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      fio: ['', [
        Validators.required
      ]]
    }, {
      validator: ConfirmedValidators.MustMatch('password', 'passwordConfirm')
    })
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit() {
    this.submitted = true

    if (this.formRegistration.invalid)
    {
      return
    }

    const account: Account = {
      email: this.formRegistration.value.email,
      password: this.formRegistration.value.password,
      fio: this.formRegistration.value.fio
    }

    this.authService.register(account)
      .subscribe(response => {
        this.formRegistration.reset()
        this.submitted = false
        console.log(response)
      }, error => {
        if (error.error === "Email exists")
        {
          this.formRegistration.get('email').setErrors({
            uniqEmail: true
          })
          this.submitted = false
        }
      })
  }

  submitLogin() {
    this.submitted = true

    if (this.formLogin.invalid)
    {
      return
    }

    this.authService.login(this.formLogin.value.email, this.formLogin.value.password)
      .subscribe( res => {
        this.submitted = false
      }, error => {
        if (error.error === "Email not found") {
          this.formLogin.get('email').setErrors({
            uniqEmail: true
          })
        }
        if (error.status === 401) {
          this.formLogin.get('password').setErrors({
            incorrectPas: true
          })
          console.log(error.status)
        }
        this.submitted = false
      })
  }
}
