import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { ContactinfoComponent } from "./contactinfo/contactinfo.component";


// RouterModule is how you activate routerLink on a page instead of an href
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SocialmediaComponent, ContactinfoComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyFirstNG';
}
