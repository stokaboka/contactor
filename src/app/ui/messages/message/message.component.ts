import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../api/messages/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}

/*
    <div><span>from: </span><span>{{message.from}}</span></div>
    <div><span>  to: </span><span>{{message.to}}</span></div>
 */
