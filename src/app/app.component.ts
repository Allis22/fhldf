import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from "./components/my/my.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do List';
}
