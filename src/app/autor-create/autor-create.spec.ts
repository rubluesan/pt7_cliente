import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorCreate } from './autor-create';

describe('AutorCreate', () => {
  let component: AutorCreate;
  let fixture: ComponentFixture<AutorCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
