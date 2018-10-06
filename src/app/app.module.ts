import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './ui/users/user/user.component';
import { UsersComponent } from './ui/users/users/users.component';
import { MessageComponent } from './ui/messages/message/message.component';
import { MessagesComponent } from './ui/messages/messages/messages.component';
import { UserEditorComponent } from './ui/users/user-editor/user-editor.component';
import { MessageEditorComponent } from './ui/messages/message-editor/message-editor.component';
import { HeaderComponent } from './ui/layout/header/header.component';
import { FooterComponent } from './ui/layout/footer/footer.component';
import { MainPanelComponent } from './ui/layout/main-panel/main-panel.component';
import { UserDetailComponent } from './ui/users/user-detail/user-detail.component';
import { AboutComponent } from './ui/about/about/about.component';
import { ContactsComponent } from './ui/about/contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstSymbolPipe } from './utils/first-symbol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    MessageComponent,
    MessagesComponent,
    UserEditorComponent,
    MessageEditorComponent,
    HeaderComponent,
    FooterComponent,
    MainPanelComponent,
    UserDetailComponent,
    AboutComponent,
    ContactsComponent,
    FirstSymbolPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
