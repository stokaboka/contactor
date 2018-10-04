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

  // users: Observable<User[]>;
  // userDetails: Observable<UserDetail[]>;

  constructor() {}

  userProperties = [
    { label: 'псевдоним', property: 'nickName'},
    { label: 'фамилия', property: 'firstName'},
    { label: 'имя', property: 'middleName'},
    { label: 'отчество', property: 'lastName'}
  ];

  userDetailProperties = [
    { label: 'возраст', property: 'age'},
    { label: 'город', property: 'city'}
    // { label: 'информация', property: 'info'}
  ];

  // init() {
  //   this.users = this.getUsers();
  //   this.userDetails = this.getUsersDetails();
  // }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUsersDetails(): Observable<UserDetail[]> {
    return of(USERS_DETAILS);
  }

  getUser(id: String): User {
      return USERS.find( element => element.id === id );
  }

  getUserDetail(id: String): UserDetail {
    return USERS_DETAILS.find( element => element.id === id );
  }
}
