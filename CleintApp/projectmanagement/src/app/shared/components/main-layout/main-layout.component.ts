import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Account} from '../../interfaces/interfaces';
import {AuthService} from '../../services/auth.service';
import {ConfirmedValidators} from '../../validators/confirmed.validators';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';



@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  formRegistration: FormGroup
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

}
