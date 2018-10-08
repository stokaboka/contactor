import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {filter, switchMap, takeUntil} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { UsersService } from '../../../api/users/users.service';
import {User} from '../../../api/users/user';
import {UserDetail} from '../../../api/users/user-detail';

import {Message} from '../../../api/messages/message';
import {MessagesService} from '../../../api/messages/messages.service';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
  animations: [
    trigger('usersModeChange', [
      state('users', style({ height: '70vh', width: '100%' })),
      state('user', style({ height: '70vh', width: '50%' })),
      state('send', style({ height: '70vh', width: '15%' })),
      transition('* <=> *', [ animate('0.3s')])
    ]),

  trigger('messagesModeChange', [
      state('users', style({height: '0', width: '85%', display: 'none' })),
      state('user', style({ height: '0', width: '85%', display: 'none' })),
      state('send', style({ height: '70vh', width: '85%', display: 'block'})),
      // transition('* <=> *', [ animate('0.5s') ]),
      transition('user <=> send', [ animate('0.3s') ]),
      transition('users <=> send', [ animate('0s') ])
    ]),

    trigger('detailModeChange', [
      state('users', style({ height: '0', width: '50%', display: 'none' })),
      state('user', style({ height: '70vh', width: '50%', display: 'block' })),
      state('send', style({ height: '70vh', width: '50%', display: 'none' })),
      // transition('* <=> *', [ animate('0.5s')]),
      transition('users <=> user', [ animate('0.3s')]),
      transition('user <=> send', [ animate('0s')])
    ])
  ]
})
export class MainPanelComponent implements OnInit, OnDestroy {

  MODE_USERS: String = 'users';
  MODE_USER: String = 'user';
  MODE_SEND: String = 'send';

  mode: String = 'users';

  users: User[] = [];

  user$: Observable<User>;
  user: User = new User();

  detail$: Observable<UserDetail>;
  detail: UserDetail = new UserDetail();

  messages$: Observable<Message[]>;
  messages: Message[] = [];

  navEnd: Observable<NavigationEnd>;

  unsubscribeAll = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService,
    private messagesService: MessagesService
  ) {
    this.navEnd = router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit() {

    this.mode = UsersService.getDisplayMode(this.location.path());

    this.usersService.getUsers()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe({
        next: users => this.users = users
      });

    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.usersService.getUser( params.get('id') )
    ));

    this.user$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe({
      next: user => this.user = user
    });

    this.detail$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.usersService.getUserDetail( params.get('id') )
      ));

    this.detail$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe({
      next: detail => this.detail = detail
    });

    this.messages$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.messagesService.getMessages( 'contactor', params.get('id') )
      ));

    this.messages$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(
      {
        next: messages => this.messages = messages
      }
    );

  }

  onMessageSend(message: Message) {
    if (this.messages$) {
      this.messages$.subscribe(
        {
          next: messages => this.messages = messages
        }
      );
    }
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
