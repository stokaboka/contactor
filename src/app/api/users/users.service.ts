import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  // userProperties = [
  //   { label: 'псевдоним', property: 'nickName'},
  //   { label: 'фамилия', property: 'firstName'},
  //   { label: 'имя', property: 'middleName'},
  //   { label: 'отчество', property: 'lastName'}
  // ];
  //
  // userDetailProperties = [
  //   { label: 'возраст', property: 'age'},
  //   { label: 'город', property: 'city'}
  //   // { label: 'информация', property: 'info'}
  // ];

  userProperties = [
    { label: 'nickname', property: 'nickName'},
    { label: 'first name', property: 'firstName'},
    { label: 'middle name', property: 'middleName'},
    { label: 'last name', property: 'lastName'}
  ];

  userDetailProperties = [
    { label: 'age', property: 'age'},
    { label: 'city', property: 'city'}
    // { label: 'информация', property: 'info'}
  ];

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUsersDetails(): Observable<UserDetail[]> {
    return of(USERS_DETAILS);
  }

  getUser(id: string) {
    return this.getUsers().pipe(
      map((users: User[]) => users.find(user => user.id === id))
    );
  }

  getUserDetail(id: string) {
    return this.getUsersDetails().pipe(
      map((details: UserDetail[]) => details.find(user => user.id === id))
    );
  }

}
