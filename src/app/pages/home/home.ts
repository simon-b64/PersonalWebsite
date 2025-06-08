import {Component} from '@angular/core';
import {Logo} from '../../components/logo/logo';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'page-home',
    imports: [
        Logo,
        FontAwesomeModule,
    ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {
    protected readonly anglesDown = faAnglesDown;
}
