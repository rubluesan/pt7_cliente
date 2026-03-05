import { TestBed } from '@angular/core/testing';

import { DatosAutores } from './datos-autores';

describe('DatosAutores', () => {
  let service: DatosAutores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosAutores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
