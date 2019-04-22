import { Component, Input } from "@angular/core";

@Component({
    selector: 'offcanvas',
    templateUrl: './offcanvas.component.html',
    styleUrls: ['./offcanvas.component.css'],
})

export class OffcanvasComponent {
    @Input() offcanvasContent: string;
    @Input() contentLink: string;
    @Input() currentComponent: string;
}