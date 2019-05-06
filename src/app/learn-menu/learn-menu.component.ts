import { Component, OnInit } from '@angular/core';
import { CellService } from '../cell.service';

@Component({
  selector: 'app-learn-menu',
  templateUrl: './learn-menu.component.html',
  styleUrls: ['./learn-menu.component.css']
})
export class LearnMenuComponent implements OnInit {

  constructor(
    private cellService: CellService,
  ) { }

  ngOnInit() {
  }

}
