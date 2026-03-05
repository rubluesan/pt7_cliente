import { Component, inject, signal } from '@angular/core';
import { ILibro } from '../interfaces/ilibro';
import { DatosLibros } from '../services/datos-libros';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-libro-list',
  imports: [RouterLink],
  templateUrl: './libro-list.html',
  styleUrl: './libro-list.css',
})
export class LibroList {
  tituloListado = signal('Listado de libros');
  libros = signal<ILibro[]>([]);

  private autorService = inject(DatosLibros);
  ngOnInit() {
    console.log('Listado de autores inicializado');
    this.autorService.getDatos().subscribe((resp) => {
      // accedemos al body de la respuesta HTTP.
      if (resp.body) this.libros.set(resp.body);
    });
  }
}
