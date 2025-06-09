import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
    imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
    protected readonly faInstagram = faInstagram;
    protected readonly faGithub = faGithub;
    protected readonly faLinkedinIn = faLinkedinIn;
}
