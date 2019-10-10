import { TestBed } from '@angular/core/testing';

import { DadosComidasService } from './dados-comidas.service';

describe('DadosComidasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosComidasService = TestBed.get(DadosComidasService);
    expect(service).toBeTruthy();
  });
});
