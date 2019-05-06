import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Cell }         from '../cell/cell';
import { CellService }  from '../cell.service'

@Component({
    selector: 'app-learn-cell',
    templateUrl: './learn-cell.component.html',
    styleUrls: ['./learn-cell.component.css'],
    providers: [CellService]
})

export class LearnCellComponent implements OnInit {
    
    cell: Cell;

    constructor(        
        private route: ActivatedRoute,
        private cellService: CellService,
        private location: Location,
    ){}

    ngOnInit(): void {
    }
}
