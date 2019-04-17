import { Component, Input } from "@angular/core";

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})

export class CardComponent {
    @Input() cardTitle: string;
    @Input() cardExcerpt: string;
    @Input() cardLink: string;
    @Input('master') content: string;
}