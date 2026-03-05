import { Routes } from '@angular/router';
import { AutorList } from './autor-list/autor-list';
import { Welcome } from './welcome/welcome';
import { LibroList } from './libro-list/libro-list';
import { LibroCreate } from './libro-create/libro-create';
import { AutorCreate } from './autor-create/autor-create';
import { LibroEdit } from './libro-edit/libro-edit';
import { AutorEdit } from './autor-edit/autor-edit';

export const routes: Routes = [
  { path: 'welcome', component: Welcome },
  { path: 'autor-list', component: AutorList },
  { path: 'libro-list', component: LibroList },
  { path: 'libro-create', component: LibroCreate },
  { path: 'autor-create', component: AutorCreate },
  { path: 'libro-edit/:id', component: LibroEdit },
  { path: 'autor-edit/:id', component: AutorEdit },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];
