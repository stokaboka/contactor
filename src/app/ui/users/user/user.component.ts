import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {User} from '../../../api/users/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  MODE_USERS: String = 'users';
  MODE_USER: String = 'user';
  MODE_SEND: String = 'send';

  urlPart: String = 'user';

  @Input() user: User;
  @Input() mode: String = this.MODE_USERS;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes['mode'];
    this.urlPart =  (change.currentValue === this.MODE_SEND) ? 'send' : 'user';
  }

}
