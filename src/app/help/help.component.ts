import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import M from 'materialize-css';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  @ViewChild('intro') public intro: ElementRef;
  @ViewChild('version') public version: ElementRef;
  @ViewChild('req') public req: ElementRef;
  @ViewChild('nav') public nav: ElementRef;
  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems, {
        hoverEnabled: false
      });
    });
  }

  scrollTo(id){
    switch(id){
      case 'intro':
        this.intro.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        break;
      case 'version':
        this.version.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        break;
      case 'req':
        this.req.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        break;
      case 'nav':
        this.nav.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        break;
    }
  }
}