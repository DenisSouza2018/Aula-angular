import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaInserirComponent } from './disciplina-inserir.component';

describe('DisciplinaInserirComponent', () => {
  let component: DisciplinaInserirComponent;
  let fixture: ComponentFixture<DisciplinaInserirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaInserirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
