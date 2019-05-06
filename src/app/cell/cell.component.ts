import { Component, OnInit } from '@angular/core';
import { CellService } from '../cell.service';
import { Cell } from './cell';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

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
        console.log(data)
        console.log('1:'+data.id)
        console.log('2:'+data[this.id].id)
        console.log('2:'+data[this.id].name)
        console.log('2:'+data[this.id].infos)
        console.log('2:'+data[this.id].organels)
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
