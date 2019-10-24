import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaInserirComponent } from './matricula-inserir.component';

describe('MatriculaInserirComponent', () => {
  let component: MatriculaInserirComponent;
  let fixture: ComponentFixture<MatriculaInserirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaInserirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
