import { Component, OnInit } from '@angular/core';
import { USERS } from '../../../api/users/mock-users';
import {User} from '../../../api/users/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;
  user: User;

  constructor() { }

  ngOnInit() {
  }

  onClick(user: User): void {
    this.user = user;
  }

}
