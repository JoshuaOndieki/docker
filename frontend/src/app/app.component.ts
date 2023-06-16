import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, AboutusComponent]
})
export class AppComponent {
  title = 'frontend';
}
