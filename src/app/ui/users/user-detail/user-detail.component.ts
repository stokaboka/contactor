import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../../api/users/users.service';
import {User} from '../../../api/users/user';
import {UserDetail} from '../../../api/users/user-detail';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  userDetail: UserDetail;

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

    // const id: String = this.route.snapshot.paramMap.get('id');
    this.getUsersDetails( this.user.id );
  }

  getUsersDetails( id ): void {
    // this.user = this.usersService.getUser( id );
    this.userDetail = this.usersService.getUserDetail( id );
  }

}
