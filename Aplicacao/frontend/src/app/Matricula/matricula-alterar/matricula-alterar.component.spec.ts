import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaAlterarComponent } from './matricula-alterar.component';

describe('MatriculaAlterarComponent', () => {
  let component: MatriculaAlterarComponent;
  let fixture: ComponentFixture<MatriculaAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
