import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
/*Components*/
import { HeaderComponent } from './components/header/header.component';
import { SidenavHeaderComponent } from './components/sidenav-header/sidenav-header.component';
import { MainComponent } from './components/main/main.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidenavHeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Amazon Clone';
}
