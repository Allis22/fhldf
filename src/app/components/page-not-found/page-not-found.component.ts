import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  standalone: true,
  imports:[RouterModule, RouterLink],
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
