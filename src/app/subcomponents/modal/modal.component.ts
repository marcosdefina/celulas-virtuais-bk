import { Component, Input } from "@angular/core";

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})

export class ModalComponent {
    @Input() modalTitle: string;
    @Input() modalExcerpt: string;
    @Input() modalImageUrl: string;
    @Input() modalInfos: [];
    //modalImageUrl = 'assets/images/nucleo.svg'
}