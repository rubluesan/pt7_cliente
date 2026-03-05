import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  titulo = signal("Bienvenido a la web de nuestra biblioteca");
}
