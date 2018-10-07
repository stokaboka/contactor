import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Message} from '../../../api/messages/message';
import {MessagesService} from '../../../api/messages/messages.service';

import {User} from '../../../api/users/user';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.css']
})
export class MessageEditorComponent implements OnInit {

  @Input() user: User;
  @Output() messageSend = new EventEmitter<Message>();

  message: Message;

  constructor(
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.message = new Message('contactor', this.user.id, new Date(), '');
  }

  onSubmit() {
    this.messagesService.sendMessage(this.message)
      .subscribe({
        next: message => {
          this.messageSend.emit(message);
          this.message = new Message('contactor', this.user.id, new Date(), '!!!');
        }
      });

  }

}
