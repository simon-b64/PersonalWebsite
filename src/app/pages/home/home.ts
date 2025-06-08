import { Component } from '@angular/core';
import { Logo } from '../../components/logo/logo';

@Component({
  selector: 'page-home',
    imports: [
        Logo,
    ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomePage {

}
