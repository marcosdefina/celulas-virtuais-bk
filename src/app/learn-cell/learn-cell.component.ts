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
    id: string;
  
    constructor(
      private cellService: CellService,
      private route: ActivatedRoute,
    ) {}
  
    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.defaultCell();    
      this.showCell();
    }
  
    showCell(){
      this.cellService.callTest('http://localhost:4200/assets/json/celulas.json')
        .subscribe((data: Cell) => {
          this.cell = {
            id: data[this.id].id,
            name: data[this.id].name,
            infos: data[this.id].infos,
            organels: data[this.id].organels,        
          }
        })
    }
  
    defaultCell(){
      this.cell = {'id':0,'infos':[],'name':'default-cell','organels':[]}
    }
}
