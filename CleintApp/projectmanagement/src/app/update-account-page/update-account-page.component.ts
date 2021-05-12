import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../shared/interfaces/interfaces';
import {UserService} from '../shared/services/user.service';
import {DataupdateService} from '../shared/services/dataupdate.service';

@Component({
  selector: 'app-update-account-page',
  templateUrl: './update-account-page.component.html',
  styleUrls: ['./update-account-page.component.scss']
})
export class UpdateAccountPageComponent implements OnInit {

  form: FormGroup
  submitted: boolean = false
  avatar: string = ''
  user: User
  updated: boolean = false
  data: File
  avatar_min: string = ''


  constructor(
    private userService: UserService,
    private dataUpdateService: DataupdateService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl(''),
      avatar: new FormControl('')
    })
    this.userService.getUser().subscribe(user => {
      this.user = user
    })
  }


  onFileChanges(event: any) {
    this.avatar = event[0].base64
    console.log(this.avatar)
  }

  updateAccount() {
    if (this.form.invalid)
    {
      return
    }

    this.submitted = true

    const user: User = {
      userId: this.user.userId,
      fio: this.user.fio,
      created_at: this.user.created_at,
      email: this.user.email,
      phone: this.form.value.phone,
      avatar: this.avatar,
      avatar_min: this.avatar_min
    }
    this.userService.updateUser(user).subscribe( user => {
      this.submitted = false
      this.form.reset()
      this.updated = true
      this.dataUpdateService.updateUserLayout.next()
    })
  }

  compress(event: any) {
    this.submitted = true
    const width = 70;
    const height = 70;
    const fileName = event.target.files[0].name;
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0])
    reader.onload = event => {
      const img = new Image()

      img.src = event.target.result.toString()
      img.onload = () => {
        const elem = document.createElement('canvas')
        elem.width = width
        elem.height = height
        const ctx = elem.getContext('2d')

        ctx.drawImage(img, 0, 0, width, height)
        this.avatar_min = ctx.canvas.toDataURL('image/jpeg')
        this.submitted = false
      }
    }
  }

}
