import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IAutor } from '../interfaces/iautor';
import { DatosAutores } from '../services/datos-autores';

@Component({
  selector: 'app-autor-create',
  imports: [ReactiveFormsModule],
  templateUrl: './autor-create.html',
  styleUrl: './autor-create.css',
})
export class AutorCreate {
  private autorService = inject(DatosAutores);
  router = inject(Router);

  formBuilder = inject(FormBuilder);
  errorMessage = signal<string>('');
  autores = signal<IAutor[] | null>([]);

  myForm: FormGroup = this.formBuilder.group({
    nombre: [null],
    apellidos: [null],
  });
  // ngOnInit(): void {
  //   this.autorService.getDatos().subscribe({
  //     next: (data) => {
  //       this.autores.set(data.body);
  //     },
  //     error: (error) => {
  //       // interpolamos a la vista error.message

  //       this.errorMessage.set(error.message);
  //     },
  //   });
  // }

  onSubmit(autor: any) {
    this.autorService.createAutor(autor).subscribe({
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
