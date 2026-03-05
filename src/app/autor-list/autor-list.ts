import { Component, OnInit, signal, inject, computed } from '@angular/core';
import { IAutor } from '../interfaces/iautor';
import { DatosAutores } from '../services/datos-autores';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-autor-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './autor-list.html',
  styleUrl: './autor-list.css',
})
export class AutorList implements OnInit {
  tituloListado = signal('Listado de autores');
  autores = signal<IAutor[]>([]);
  listFilter = signal('');
  message = signal<string>('');
  errorMessage = signal<string>('');

  // computed: lista filtrada automáticamente según listFilter
  filteredAutores = computed(() => {
    // Obtener el valor actual del filtro y convertirlo a minúsculas
    const filter = this.listFilter().toLowerCase();

    // Si filter está vacío, devolvemos toda la lista de autores
    // Si filter tiene texto, filtramos la lista usando includes
    // - this.autores() devuelve el array actual de autores (valor de la señal)
    // - cada autor.nombre se pasa a minúsculas para comparar sin distinguir mayúsculas/minúsculas
    return filter
      ? this.autores().filter(
          (autor) =>
            autor.nombre.toLowerCase().includes(filter) ||
            autor.apellidos.toLowerCase().includes(filter),
        )
      : this.autores();
  });

  private autorService = inject(DatosAutores);

  ngOnInit() {
    console.log('Listado de autores inicializado');
    this.cargarAutores();
  }

  cargarAutores() {
    this.autorService.getDatos().subscribe((resp) => {
      // accedemos al body de la respuesta HTTP.
      if (resp.body) this.autores.set(resp.body);
    });
  }

  eliminarAutor(id: any) {
    this.autorService.deleteAutor(id).subscribe({
      next: (data) => {
        this.cargarAutores();
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
