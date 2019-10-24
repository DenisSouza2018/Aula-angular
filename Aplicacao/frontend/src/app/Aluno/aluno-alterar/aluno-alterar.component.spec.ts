import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAlterarComponent } from './aluno-alterar.component';

describe('AlunoAlterarComponent', () => {
  let component: AlunoAlterarComponent;
  let fixture: ComponentFixture<AlunoAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
