import {Component, Input, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Message} from '../../../api/messages/message';
import {MessagesService} from '../../../api/messages/messages.service';
import {User} from '../../../api/users/user';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messages: Array<Message>;
  @Input() user: User;

  constructor(
  ) { }

  ngOnInit() {
  }

}
