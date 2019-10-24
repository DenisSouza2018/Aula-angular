import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaConsultarComponent } from './matricula-consultar.component';

describe('MatriculaConsultarComponent', () => {
  let component: MatriculaConsultarComponent;
  let fixture: ComponentFixture<MatriculaConsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaConsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
