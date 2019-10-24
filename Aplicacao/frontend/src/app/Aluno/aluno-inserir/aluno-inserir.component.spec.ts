import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoInserirComponent } from './aluno-inserir.component';

describe('AlunoInserirComponent', () => {
  let component: AlunoInserirComponent;
  let fixture: ComponentFixture<AlunoInserirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoInserirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
