import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Cell } from './cell/cell';



@Injectable({ providedIn: 'root' })
export class CellService {
  json: Cell;

  constructor(
    private http: HttpClient,
  ) { }
  
  callTest(url: string) {
    return this.http.get(url);
  }
}
