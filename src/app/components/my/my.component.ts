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
title = 'Bienvenido al To-Do List'
description = 'Inicie Sesion para empezar con sus tareas de hoy'
}