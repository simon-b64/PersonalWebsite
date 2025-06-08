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
    @Input() color: string | undefined;
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
        const width = 930 + (this.strokeWidth ?? 6);
        const height = 832 + (this.strokeWidth ?? 6);
        return `-${padding} -${padding} ${width} ${height}`;
    }

    get effectiveColor() {
        return this.color ?? '#000000';
    }
}
