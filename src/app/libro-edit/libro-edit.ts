import { Component, inject, signal } from '@angular/core';
import { DatosLibros } from '../services/datos-libros';
import { DatosAutores } from '../services/datos-autores';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IAutor } from '../interfaces/iautor';

@Component({
  selector: 'app-libro-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './libro-edit.html',
  styleUrl: './libro-edit.css',
})
export class LibroEdit {
  private libroService = inject(DatosLibros);
  private autorService = inject(DatosAutores);
  router = inject(Router);
  ruta = inject(ActivatedRoute);

  formBuilder = inject(FormBuilder);
  errorMessage = signal<string>('');
  autores = signal<IAutor[] | null>([]);
  id: any;

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

    this.id = this.ruta.snapshot.params['id'];
    this.libroService.getLibro(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.myForm.setValue({
          titulo: data.body?.titulo,
          fechaP: data.body?.fechaP,
          ventas: data.body?.ventas,
          autor_id: data.body?.autor.id,
        });
      },
      error: (error) => {
        // interpolamos a la vista error.message
      },
    });
  }

  onSubmit(libro: any) {
    this.libroService.editLibro(this.id, libro).subscribe({
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
