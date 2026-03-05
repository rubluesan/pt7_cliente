import { TestBed } from '@angular/core/testing';

import { DatosLibros } from './datos-libros';

describe('DatosLibros', () => {
  let service: DatosLibros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosLibros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
