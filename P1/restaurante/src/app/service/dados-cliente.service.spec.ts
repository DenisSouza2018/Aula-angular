import { TestBed } from '@angular/core/testing';

import { DadosClienteService } from './dados-cliente.service';

describe('DadosClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosClienteService = TestBed.get(DadosClienteService);
    expect(service).toBeTruthy();
  });
});
