import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import {User} from '../../../api/users/user';

import { UsersService } from '../../../api/users/users.service';

@Component({
  selector: 'app-users',
  animations: [
    trigger('emptyLoaded', [
      state('empty', style({ height: '0', opacity: 0 })),
      state('loaded', style({ height: '70vh', opacity: 1 })),
      transition('empty => loaded', [ animate('0.5s') ])
    ])
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() user: User;
  @Input() users: Array<User>;
  @Input() mode: String = 'users';

  loaded: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {

    this.usersService.getUsers()
      .subscribe({
        next: users => {
          this.users = users;
          this.loaded = true;
        }
      });
  }

  onClick(user: User): void {
    this.user = user;
  }

}
