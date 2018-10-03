import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './ui/users/user/user.component';
import { UsersComponent } from './ui/users/users/users.component';
import { MessageComponent } from './ui/messages/message/message.component';
import { MessagesComponent } from './ui/messages/messages/messages.component';
import { UserEditorComponent } from './ui/users/user-editor/user-editor.component';
import { MessageEditorComponent } from './ui/messages/message-editor/message-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    MessageComponent,
    MessagesComponent,
    UserEditorComponent,
    MessageEditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
