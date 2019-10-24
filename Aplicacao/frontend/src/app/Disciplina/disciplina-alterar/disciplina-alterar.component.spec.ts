import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaAlterarComponent } from './disciplina-alterar.component';

describe('DisciplinaAlterarComponent', () => {
  let component: DisciplinaAlterarComponent;
  let fixture: ComponentFixture<DisciplinaAlterarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaAlterarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
