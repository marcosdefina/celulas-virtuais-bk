import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Cell } from './cell/cell';



@Injectable({
  providedIn: 'root'
})
export class CellService {

  constructor(
    private http: HttpClient,
  ) { }

  /** GET hero by id. Will 404 if id not found  */
  getCell() {
    const url = 'http://localhost:4200/assets/json/celulas.json';
    console.log(this.http.get<Cell>(url).pipe(
      tap(_ => this.log(`fetched hero id=`)),
      catchError(this.handleError<Cell>(`getHero id=`))
    ));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log("Deu RUIM");
  }
 
}
