import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatosAutores } from '../services/datos-autores';
import { ActivatedRoute, Router } from '@angular/router';
import { IAutor } from '../interfaces/iautor';

@Component({
  selector: 'app-autor-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './autor-edit.html',
  styleUrl: './autor-edit.css',
})
export class AutorEdit {
  private autorService = inject(DatosAutores);
  router = inject(Router);
  ruta = inject(ActivatedRoute);

  formBuilder = inject(FormBuilder);
  errorMessage = signal<string>('');
  autores = signal<IAutor[] | null>([]);
  id: any;

  myForm: FormGroup = this.formBuilder.group({
    nombre: [null],
    apellidos: [null],
    imagen: [null],
  });

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params['id'];
    this.autorService.getAutor(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.myForm.setValue({
          nombre: data.body?.nombre,
          apellidos: data.body?.apellidos,
          imagen: null,
        });
      },
      error: (error) => {
        // interpolamos a la vista error.message
      },
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.myForm.patchValue({ imagen: file });
    }
  }

  onSubmit(autor: any) {
    const autorFormData = new FormData();

    autorFormData.append('nombre', autor.nombre);
    autorFormData.append('apellidos', autor.apellidos);
    if (autor.apellidos) {
      autorFormData.append('imagen', autor.imagen);
    }

    this.autorService.editAutor(this.id, autorFormData).subscribe({
      next: (data) => {
        // navegamos a la ruta libro-list
        this.router.navigateByUrl('/autor-list');
      },
      error: (error) => {
        // interpolamos a la vista error.message

        this.errorMessage.set(error.message);
      },
    });
  }
}
