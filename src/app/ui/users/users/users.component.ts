import { Component, OnInit } from '@angular/core';
import { USERS } from '../../../api/users/mock-users';
import {User} from '../../../api/users/user';

import { UsersService } from '../../../api/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;
  user: User;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.init();
  }

  onClick(user: User): void {
    this.user = user;
  }

  init(): void {
    this.usersService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.user = this.users.length > 0 ? this.users[0] : null;
      });
  }
}
