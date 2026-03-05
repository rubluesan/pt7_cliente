import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAutor } from '../interfaces/iautor';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DatosAutores {
  private http = inject(HttpClient);
  public getDatos(): Observable<HttpResponse<IAutor[]>> {
    return this.http.get<IAutor[]>(environment.apiUrl + 'api/autores', {
      observe: 'response',
    });
    //devuelve un observable
  }
  public createAutor(datos: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(environment.apiUrl + 'api/autor', datos, {
      observe: 'response',
    });
    //devuelve un observable
  }

  public getAutor(id: any): Observable<HttpResponse<IAutor>> {
    return this.http.get<IAutor>(environment.apiUrl + `api/autor/${id}`, {
      observe: 'response',
    });
    //devuelve un observable
  }

  public editAutor(id: any, datos: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(environment.apiUrl + `api/autor/${id}`, datos, {
      observe: 'response',
    });
    //devuelve un observable
  }

  public deleteAutor(id: any): Observable<HttpResponse<any>> {
    return this.http.delete<any>(environment.apiUrl + `api/autor/${id}`, {
      observe: 'response',
    });
    //devuelve un observable
  }
}
