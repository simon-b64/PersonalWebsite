import { Component, Input, numberAttribute } from '@angular/core';

@Component({
    selector: 'app-logo',
    imports: [],
    templateUrl: './logo.html',
    styleUrl: './logo.css',
})
export class Logo {
    @Input({ transform: numberAttribute }) scale: number | undefined;
    @Input() width: number | undefined;
    @Input() color: string = 'black';
    @Input({ transform: numberAttribute }) strokeWidth: number | undefined;

    get calculatedWidth() {
        const scale = this.scale ?? 1;
        const width = this.width ?? 465;
        return width * scale;
    }

    get effectiveStrokeWidth() {
        return this.strokeWidth ?? 6;
    }

    get effectiveViewBox() {
        const padding = (this.strokeWidth ?? 6) / 2;
        const width = 930 + padding;
        const height = 832 + padding;
        return `0 0 ${width} ${height}`;
    }
}
