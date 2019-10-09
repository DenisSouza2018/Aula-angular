import { TestBed } from '@angular/core/testing';

import { DadosProdutosService } from './dados-produtos.service';

describe('DadosProdutosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosProdutosService = TestBed.get(DadosProdutosService);
    expect(service).toBeTruthy();
  });
});
