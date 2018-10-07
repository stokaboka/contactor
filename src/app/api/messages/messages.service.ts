import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Message} from './message';
import {RequestOptions} from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'http://contactor.local/api';
  private apiUrlMassages = this.apiUrl + '/messages.json';
  private apiUrlSendMassage = this.apiUrl + '/send.json';

  private static log(message: string) {
    console.log(`MessagesService: ${message}`);
  }

  getMessages(from: String, to: String): Observable<Message[]> {
    const url = `${this.apiUrlMassages}?from=${from}&to=${to}`;
    return this.http.get<Message[]>(url)
      .pipe(
        tap(_ => MessagesService.log(`fetched messages from=${from} to=${to}`)),
        catchError(this.handleError<Message[]>(`MessagesService::getMessages from=${from} to=${to}`, []))
      );
  }

  sendMessage(message: Message): Observable<Message> {

    const url = `${this.apiUrlSendMassage}?from=${message.from}&to=${message.to}&text=${message.text}`;
    return this.http.get<Message>(url)
    // return this.http.post<Message>(this.apiUrlSendMassage, message, httpOptions)
      .pipe(
      tap(_ => MessagesService.log(`added message w/ from=${message.from} to=${message.to}`)),
      catchError(this.handleError<Message>('MessagesService::sendMessage'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      MessagesService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
