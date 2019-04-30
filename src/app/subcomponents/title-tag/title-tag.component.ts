import { Component, Input } from "@angular/core";

@Component({
    selector: 'title-tag',
    templateUrl: './title-tag.component.html',
    styleUrls: ['./title-tag.component.css'],
})

export class TitleTagComponent {
    @Input() title: string;
    @Input() excerpt: string;

    public innerWidth: any;
    public littleTitle: any;
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.littleTitle = innerWidth < 321;
    }

    
}