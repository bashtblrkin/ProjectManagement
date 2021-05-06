import { Component, OnInit } from '@angular/core';
import {DatasearchService} from '../../services/datasearch.service';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/interfaces';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  user: User
  openSettings: boolean = false

  constructor(
    private dataSearchService: DatasearchService,
    private userService: UserService,
    private authService: AuthService) { }

  set searchStr(searchStr: string) {
      this.dataSearchService.searchStr.next(searchStr)
  }
  ngOnInit(): void {
      this.userService.getUser().subscribe( user => {
        this.user = user
      })
  }

  logout() {
    this.authService.logout()
  }
}
