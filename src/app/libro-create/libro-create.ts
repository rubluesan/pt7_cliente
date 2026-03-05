import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatosLibros } from '../services/datos-libros';
import { Router } from '@angular/router';
import { IAutor } from '../interfaces/iautor';
import { DatosAutores } from '../services/datos-autores';

@Component({
  selector: 'app-libro-create',
  imports: [ReactiveFormsModule],
  templateUrl: './libro-create.html',
  styleUrl: './libro-create.css',
})
export class LibroCreate implements OnInit {
  private libroService = inject(DatosLibros);
  private autorService = inject(DatosAutores);
  router = inject(Router);

  formBuilder = inject(FormBuilder);
  errorMessage = signal<string>('');
  autores = signal<IAutor[] | null>([]);

  myForm: FormGroup = this.formBuilder.group({
    titulo: [null],
    fechaP: [null],
    ventas: [null],
    autor_id: [null],
  });

  ngOnInit(): void {
    this.autorService.getDatos().subscribe({
      next: (data) => {
        this.autores.set(data.body);
      },
      error: (error) => {
        // interpolamos a la vista error.message

        this.errorMessage.set(error.message);
      },
    });
  }

  onSubmit(libro: any) {
    this.libroService.createLibro(libro).subscribe({
      next: (data) => {
        // navegamos a la ruta libro-list
        this.router.navigateByUrl('/libro-list');
      },
      error: (error) => {
        // interpolamos a la vista error.message

        this.errorMessage.set(error.message);
      },
    });
  }
}
