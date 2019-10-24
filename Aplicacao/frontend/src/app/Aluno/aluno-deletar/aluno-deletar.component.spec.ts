import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDeletarComponent } from './aluno-deletar.component';

describe('AlunoDeletarComponent', () => {
  let component: AlunoDeletarComponent;
  let fixture: ComponentFixture<AlunoDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
