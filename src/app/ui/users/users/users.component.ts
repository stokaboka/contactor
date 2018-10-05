import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from '../../../api/users/user';

import { UsersService } from '../../../api/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() user: User;

  users: Array<User>;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe({
        next: users => this.users = users
      });
  }

  onClick(user: User): void {
    this.user = user;
  }

}

// [class.selected]="usr.id === user.id"
