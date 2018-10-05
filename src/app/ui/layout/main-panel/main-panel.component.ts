import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UsersService } from '../../../api/users/users.service';
import {User} from '../../../api/users/user';
import {UserDetail} from '../../../api/users/user-detail';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit, OnDestroy {

  @Input() user: User;

  user$: Observable<User>;
  detail$: Observable<UserDetail>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService
  ) {

  }

  ngOnInit() {

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
