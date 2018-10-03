import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { USERS } from './mock-users';
import {UserDetail} from './user-detail';
import {USERS_DETAILS} from './mock-user-detail';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Observable<User[]>;
  userDetails: Observable<UserDetail[]>;

  constructor() { }

  init() {
    this.users = this.getUsers();
    this.userDetails = this.getUserDetails();
  }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUserDetails(): Observable<UserDetail[]> {
    return of(USERS_DETAILS);
  }
}
