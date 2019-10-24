import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaDeletarComponent } from './disciplina-deletar.component';

describe('DisciplinaDeletarComponent', () => {
  let component: DisciplinaDeletarComponent;
  let fixture: ComponentFixture<DisciplinaDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
