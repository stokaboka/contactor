import { Component, OnInit } from '@angular/core';
import {User} from '../../../api/users/user';

import { UsersService } from '../../../api/users/users.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
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

  onUsersCollectionChanged(users: Array<User>): void {
    this.users = users;
    this.user = this.users.length > 0 ? this.users[0] : null;
  }

  init(): void {
    this.usersService.getUsers()
    .subscribe({
      next: users => this.onUsersCollectionChanged(users)
    });

  }
}
