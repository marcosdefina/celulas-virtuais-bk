import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Quizz } from './quizz';
import { QuizzService } from '../quizz.service';

@Component({
    selector: 'app-quizz',
    templateUrl: './quizz.component.html',
    styleUrls: ['./quizz.component.css'],
    providers: [QuizzService]
})

export class QuizzComponent implements OnInit {

    quizz: Quizz;
    id: string;
    treatedId: string;
    constructor(
      private quizzService: QuizzService,
      private route: ActivatedRoute,
    ) {}
    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.defaultQuizz();
      this.showQuizz();
    }

    showQuizz() {
      this.quizzService.callTest('http://localhost:4200/assets/json/quizz.json')
        .subscribe((data: Quizz) => {
          this.quizz = {
            id: data[this.id].id,
            description: data[this.id].description,
            infos: data[this.id].infos,
            exercises: data[this.id].exercises,
          };
          // this will be replaced by an array of ids, linking each piece of the cell-image
          // to its respective modal
          this.treatedId = '#' + this.quizz.exercises[0].id;
        })
    }

    defaultQuizz() {
      this.quizz = {
        id: 0,
        infos: [ ],
        description: 'default-quizz',
        exercises: [
          {
            id: '',
            text: '',
          }
        ]
      };
    }
}
