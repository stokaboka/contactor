import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from '../../../api/users/users.service';
import {User} from '../../../api/users/user';
import {UserDetail} from '../../../api/users/user-detail';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  @Input() user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService
  ) {

  }

  ngOnInit() {

    const id: String = this.route.snapshot.paramMap.get('id');
    this.getUser( id );
  }

  getUser( id ): void {
    this.user = this.usersService.getUser( id );
  }
}
