import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Quizz } from './quizz/quizz';

@Injectable({ providedIn: 'root' })
export class QuizzService {
  json: Quizz;

  constructor(
    private http: HttpClient,
  ) { }

  callTest(url: string) {
    return this.http.get(url);
  }
}
