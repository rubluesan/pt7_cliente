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
  message = signal<string>('');
  errorMessage = signal<string>('');

  private autorService = inject(DatosLibros);
  private libroService = inject(DatosLibros);

  ngOnInit() {
    console.log('Listado de autores inicializado');
    this.cargarLibros();
  }

  cargarLibros() {
    this.autorService.getDatos().subscribe((resp) => {
      // accedemos al body de la respuesta HTTP.
      if (resp.body) this.libros.set(resp.body);
    });
  }

  eliminarLibro(id: any) {
    this.libroService.deleteLibro(id).subscribe({
      next: (data) => {
        this.cargarLibros();
        this.message.set(data.body.message);
        setTimeout(() => {
          this.message.set('');
        }, 6000);
      },
      error: (error) => {
        // interpolamos a la vista error.message

        this.errorMessage.set(error.message);
      },
    });
  }
}
