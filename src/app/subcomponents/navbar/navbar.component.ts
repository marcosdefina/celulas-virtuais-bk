import { Component, Input } from "@angular/core";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent {
    @Input() navbarContent: string;
    @Input() contentLink: string;
}