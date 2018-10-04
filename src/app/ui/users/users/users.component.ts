import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from '../../../api/users/user';

import { UsersService } from '../../../api/users/users.service';
import {Observable} from 'rxjs';

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
    const id: String = this.route.snapshot.paramMap.get('id');
    this.user = this.usersService.getUser( id );
    this.init();
  }

  onClick(user: User): void {
    this.user = user;
  }

  onUsersCollectionChanged(users: Array<User>): void {
    this.users = users;
  }

  init(): void {
    this.usersService.getUsers()
    .subscribe({
      next: users => this.onUsersCollectionChanged(users)
    });

  }
}
