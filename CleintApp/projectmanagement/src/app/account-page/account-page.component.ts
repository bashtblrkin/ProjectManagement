import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/interfaces/interfaces';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  user: User
  daysPassed: number
  daysStr: string
  files: any[]

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id'])
    {
      this.userService.getUserById(this.route.snapshot.params['id']).subscribe(user => {
        this.user = user
        const currentData = new Date()
        this.daysPassed = Math.floor((Date.parse(currentData.toString()) - Date.parse(this.user.created_at)) / 86400000)
        this.daysStr = this.userService.declOfNum(this.daysPassed, ['день', 'дня', 'дней'])
      })
    } else {
      this.userService.getUser().subscribe(user => {
        this.user = user
        const currentData = new Date()
        this.daysPassed = Math.floor((Date.parse(currentData.toString()) - Date.parse(this.user.created_at)) / 86400000)
        this.daysStr = this.userService.declOfNum(this.daysPassed, ['день', 'дня', 'дней'])
      })
    }


  }

}
