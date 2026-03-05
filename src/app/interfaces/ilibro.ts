import { IAutor } from './iautor';

export interface ILibro {
  id: number;
  titulo: string;
  fechaP: string;
  ventas: number;
  autor: IAutor;
}
