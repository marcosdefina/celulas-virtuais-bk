import { Component, Input } from "@angular/core";

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})

export class ModalComponent {
    @Input() modalId: string;
    @Input() modalTitle: string;
    @Input() modalExcerpt: string;
    @Input() modalImageUrl: string;
    @Input() modalInfos: [];
    @Input() modalAudio: string;
}