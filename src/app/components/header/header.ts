import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon, faAnglesDown } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    imports: [FontAwesomeModule],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    protected readonly faSun = faSun;
    protected readonly faMoon = faMoon;

    constructor(
        protected readonly themeService: ThemeService,
    ) {
    }

    protected readonly anglesDown = faAnglesDown;
}
