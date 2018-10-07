import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {filter, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UsersService } from '../../../api/users/users.service';
import {User} from '../../../api/users/user';
import {UserDetail} from '../../../api/users/user-detail';

import {UserComponent} from '../../users/user/user.component';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit, OnDestroy {

  MODE_USERS: String = 'users';
  MODE_USER: String = 'user';
  MODE_SEND: String = 'send';

  mode: String = 'users';

  users: User[] = [];
  user$: Observable<User>;
  detail$: Observable<UserDetail>;

  navEnd: Observable<NavigationEnd>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService
  ) {
    this.navEnd = router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit() {

    this.mode = UsersService.getDisplayMode(this.location.path());

    this.usersService.getUsers()
      .subscribe({
        next: users => this.users = users
      });

    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.usersService.getUser( params.get('id') )
    ));

    this.detail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.usersService.getUserDetail( params.get('id') )
      ));
  }

  ngOnDestroy() {
  }
}
