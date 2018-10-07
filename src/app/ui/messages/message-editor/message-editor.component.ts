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
  text: String;

  constructor(
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.message = new Message('contactor', this.user.id, new Date(), this.text);
    this.messagesService.sendMessage(this.message)
      .subscribe({
        next: message => {
          this.messageSend.emit(message);
          this.text = '';
        }
      });

  }

}
