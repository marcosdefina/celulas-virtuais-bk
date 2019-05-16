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

    audioInfo = new Audio

    playSound(sound) {
        console.log(this.audioInfo.paused)
        if (this.audioInfo.paused) {
            sound && (new Audio(sound)).play()
            this.audioInfo = sound
        } else
            this.audioInfo.pause()
            //TODO: Find out why pause is not working.
    }
}