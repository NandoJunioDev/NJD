import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrimaria } from './pagina-primaria';

describe('PaginaPrimaria', () => {
  let component: PaginaPrimaria;
  let fixture: ComponentFixture<PaginaPrimaria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPrimaria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPrimaria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
