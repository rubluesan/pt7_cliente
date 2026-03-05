import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroCreate } from './libro-create';

describe('LibroCreate', () => {
  let component: LibroCreate;
  let fixture: ComponentFixture<LibroCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
