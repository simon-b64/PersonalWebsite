import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    imports: [FontAwesomeModule],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    protected readonly themeService = inject(ThemeService);

    protected readonly faSun = faSun;
    protected readonly faMoon = faMoon;

}
