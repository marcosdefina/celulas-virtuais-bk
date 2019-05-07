import { Component, Input } from "@angular/core";
import {Location} from '@angular/common';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent {
    constructor(public location: Location){}
    @Input() navbarContent: string;
    @Input() contentLink: string;
}