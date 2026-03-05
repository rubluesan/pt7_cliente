import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutorList } from './autor-list/autor-list';
import { NavBar } from './nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pt4_stdalone');
  nombre = 'MArti';
  apellidos = 'Moreno';
  retornarNombreApellidos() {
    return this.nombre + ' ' + this.apellidos;
  }
}
