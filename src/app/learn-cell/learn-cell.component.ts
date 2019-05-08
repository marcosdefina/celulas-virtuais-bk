import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cell } from './cell';
import { CellService } from '../cell.service';
import { stringify } from 'querystring';

@Component({
    selector: 'app-learn-cell',
    templateUrl: './learn-cell.component.html',
    styleUrls: ['./learn-cell.component.css'],
    providers: [CellService]
})

export class LearnCellComponent implements OnInit {

    cell: Cell;
    id: string;
    treatedId: string;
    constructor(
      private cellService: CellService,
      private route: ActivatedRoute,
    ) {}
    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.defaultCell();
      this.showCell();
    }

    showCell() {
      this.cellService.callTest('http://localhost:4200/assets/json/celulas.json')
        .subscribe((data: Cell) => {
          this.cell = {
            id: data[this.id].id,
            name: data[this.id].name,
            infos: data[this.id].infos,
            organels: data[this.id].organels,
          };
          // this will be replaced by an array of ids, linking each piece of the cell-image
          // to its respective modal
          this.treatedId = '#' + this.cell.organels[0].id;
        })
    }

    defaultCell() {
      this.cell = {
        id: 0,
        infos: [ ],
        name: 'default-cell',
        organels: [
          {
            id: '',
            name: '',
            imageUrl: '',
            infos: [ ]
          }
        ]
      };
    }
}
