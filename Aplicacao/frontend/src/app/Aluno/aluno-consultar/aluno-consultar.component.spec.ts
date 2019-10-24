import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoConsultarComponent } from './aluno-consultar.component';

describe('AlunoConsultarComponent', () => {
  let component: AlunoConsultarComponent;
  let fixture: ComponentFixture<AlunoConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
