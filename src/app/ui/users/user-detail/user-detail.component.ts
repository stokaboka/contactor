import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../../api/users/users.service';
import {User} from '../../../api/users/user';
import {UserDetail} from '../../../api/users/user-detail';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;
  @Input() detail: UserDetail;

  userProperties: Array<any>;
  userDetailProperties: Array<any>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService
  ) {
  }

  ngOnInit() {
    this.userProperties = this.usersService.userProperties;
    this.userDetailProperties = this.usersService.userDetailProperties;
  }

}
