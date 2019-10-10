import { TestBed } from '@angular/core/testing';

import { DadosBebidasService } from './dados-bebidas.service';

describe('DadosBebidasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosBebidasService = TestBed.get(DadosBebidasService);
    expect(service).toBeTruthy();
  });
});
