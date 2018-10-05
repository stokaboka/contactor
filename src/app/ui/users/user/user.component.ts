import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../../api/users/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}

/*

          <div class="row">
            <span class="col user_names">{{ user.firstName }}</span>
            <span class="col user_names">{{ user.middleName }}</span>
            <span class="col user_names">{{ user.lastName }}</span>
          </div>

<span class="col user_nickname">{{ user.nickName }}</span>

    <div class="col">
      <img src="{{ user.image }}" class="user-list-item-image">
    </div>

 */
