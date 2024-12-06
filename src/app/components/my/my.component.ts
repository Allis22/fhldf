import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-my',
  standalone: true,
  imports:[RouterModule, RouterLink],
  templateUrl: './my.component.html',
  styleUrl: './my.component.css'
})
export class MyComponent {
}