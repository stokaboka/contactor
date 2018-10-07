import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { USERS } from './mock-users';

import {UserDetail} from './user-detail';
import {USERS_DETAILS} from './mock-user-detail';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) {}

  // users$: Observable<User[]>;
  // userDetails: Observable<UserDetail[]>;

  private apiUrl = 'http://contactor.local/api';
  private apiUrlUsers = this.apiUrl + '/users.json';
  private apiUrlUserDetail = this.apiUrl + '/user.json';

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

  private static log(message: string) {
    console.log(`UsersService: ${message}`);
  }

  static getDisplayMode(path: String): String {

    if ( path.startsWith( '/send/' ) ) {
      return 'send';
    }

    if ( path.startsWith( '/user/' ) ) {
      return 'user';
    }

    return 'users';

    // if ( path.startsWith( '/send/' ) ) {
    //   return 'send';
    // } else {
    //   return 'users';
    // }
  }

  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrlUsers)
        .pipe(
          tap(_ => UsersService.log('fetched users')),
          catchError(this.handleError('getUsers', []))
        );
    // return of(USERS);
  }

  // getUsers(): Observable<User[]> {
      // return of(USERS);
  // }

  // getUsersDetails(): Observable<UserDetail[]> {
  //   return of(USERS_DETAILS);
  // }

  // getUserDetail(id: string): Observable<UserDetail> {
  // return this.getUsersDetails().pipe(
  //   map((details: UserDetail[]) => details.find(user => user.id === id))
  // );
  // }

  getUser(id: string) {
      return this.getUsers().pipe(
        map((users: User[]) => users.find(user => user.id === id))
      );
  }

  getUserDetail(id: string): Observable<UserDetail> {
    const url = `${this.apiUrlUserDetail}?id=${id}`;
    return this.http.get<UserDetail>(url)
      .pipe(
        tap(_ => UsersService.log(`fetched user id=${id}`)),
        catchError(this.handleError<UserDetail>(`getUserDetail id=${id}`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      UsersService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
