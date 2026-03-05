import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILibro } from '../interfaces/ilibro';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DatosLibros {
  private http = inject(HttpClient);
  public getDatos(): Observable<HttpResponse<ILibro[]>> {
    return this.http.get<ILibro[]>(environment.apiUrl + 'api/libros', {
      observe: 'response',
    });
    //devuelve un observable
  }
  public createLibro(datos: any): Observable<HttpResponse<ILibro>> {
    return this.http.post<ILibro>(environment.apiUrl + 'api/libro', datos, {
      observe: 'response',
    });
    //devuelve un observable
  }

  public getLibro(id: any): Observable<HttpResponse<ILibro>> {
    return this.http.get<ILibro>(environment.apiUrl + `api/libro/${id}`, {
      observe: 'response',
    });
    //devuelve un observable
  }

  public editLibro(id: any, datos: any): Observable<HttpResponse<ILibro>> {
    return this.http.put<ILibro>(environment.apiUrl + `api/libro/${id}`, datos, {
      observe: 'response',
    });
    //devuelve un observable
  }

  public deleteLibro(id: any): Observable<HttpResponse<any>> {
    return this.http.delete<any>(environment.apiUrl + `api/libro/${id}`, {
      observe: 'response',
    });
    //devuelve un observable
  }
}
