import { TestBed } from '@angular/core/testing';

import { DadosComandaService } from './dados-comanda.service';

describe('DadosComandaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosComandaService = TestBed.get(DadosComandaService);
    expect(service).toBeTruthy();
  });
});
