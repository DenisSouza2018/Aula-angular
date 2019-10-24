import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaDeletarComponent } from './matricula-deletar.component';

describe('MatriculaDeletarComponent', () => {
  let component: MatriculaDeletarComponent;
  let fixture: ComponentFixture<MatriculaDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
