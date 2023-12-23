import { Component } from '@angular/core';

/*Material Modules*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

/*Components*/
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-sidenav-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MainComponent],
  templateUrl: './sidenav-header.component.html',
  styleUrl: './sidenav-header.component.css'
})
export class SidenavHeaderComponent {

}
