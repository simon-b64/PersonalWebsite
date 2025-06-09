import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly renderer: Renderer2;
    private readonly themeKey = 'theme';
    private readonly isBrowser: boolean;
    private readonly themeSubject = new BehaviorSubject<Theme>('light');

    constructor(
        @Inject(PLATFORM_ID) private readonly platformId: Object,
        @Inject(DOCUMENT) private readonly document: Document,
        rendererFactory: RendererFactory2
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this.isBrowser = isPlatformBrowser(this.platformId);
        this.initTheme();
    }

    private initTheme(): void {
        if (!this.isBrowser) return;

        const saved = localStorage.getItem(this.themeKey) as Theme | null;
        if (saved) {
            this.setTheme(saved);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.setTheme(prefersDark ? 'dark' : 'light');
        }
    }

    toggleTheme(): void {
        if (!this.isBrowser) return;

        const next: Theme = this.themeSubject.value === 'light' ? 'dark' : 'light';
        this.setTheme(next);
    }

    setTheme(theme: Theme): void {
        this.themeSubject.next(theme);
        this.renderer.setAttribute(this.document.documentElement, 'data-theme', theme);
        if (this.isBrowser) {
            localStorage.setItem(this.themeKey, theme);
        }
    }

    get currentTheme(): Theme {
        return this.themeSubject.value;
    }
}
