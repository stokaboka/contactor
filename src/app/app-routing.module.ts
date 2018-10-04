import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './ui/about/about/about.component';
import {ContactsComponent} from './ui/about/contacts/contacts.component';
import {MainPanelComponent} from './ui/layout/main-panel/main-panel.component';
import {UsersComponent} from './ui/users/users/users.component';
import {UserDetailComponent} from './ui/users/user-detail/user-detail.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: MainPanelComponent },
  { path: 'messenger', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactsComponent },
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
  // declarations: []
})
export class AppRoutingModule { }
