import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../../api/users/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  MODE_USERS: String = 'users';
  MODE_USER: String = 'user';
  MODE_SEND: String = 'send';

  @Input() user: User;
  @Input() mode: String = this.MODE_USERS;

  constructor() { }

  ngOnInit() {
  }

}

/*

        <img  class="card-img user-list-item-image img-thumbnail" src="{{ user.image }}">
        <span *ngIf="mode === MODE_USERS" class="user_names">
          {{ user.firstName }} {{ user.middleName }} {{ user.lastName }}
        </span>
        <span *ngIf="mode === MODE_USER" class="user_names">
          {{ user.firstName }} {{ user.middleName }} {{ user.lastName }}
        </span>
        <span *ngIf="mode === MODE_SEND" class="col user_names">
          {{ user.firstName | firstSymbol }} {{ user.middleName | firstSymbol }} {{ user.lastName | firstSymbol }}
        </span>

 */
