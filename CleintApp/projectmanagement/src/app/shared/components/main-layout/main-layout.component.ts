import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../validators/confirmed.validators';
import {Account} from '../../interfaces/interfaces';
import {AuthService} from '../../services/auth.service';



@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  formRegistration: FormGroup
  openRegistrationModal: boolean = false
  submitted: boolean = false

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
        Validators.required
      ]],
      passwordConfirm: ['', [
        Validators.required
      ]],
      fio: ['', [
        Validators.required
      ]]
    }, {
      validator: MustMatch('password', 'passwordConfirm')
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
      })
  }
}
