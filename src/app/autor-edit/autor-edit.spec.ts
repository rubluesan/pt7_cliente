import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorEdit } from './autor-edit';

describe('AutorEdit', () => {
  let component: AutorEdit;
  let fixture: ComponentFixture<AutorEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
