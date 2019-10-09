import { TestBed } from '@angular/core/testing';

import { DadosNotaFiscalService } from './dados-nota-fiscal.service';

describe('DadosNotaFiscalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosNotaFiscalService = TestBed.get(DadosNotaFiscalService);
    expect(service).toBeTruthy();
  });
});
