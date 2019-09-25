import { TestBed } from '@angular/core/testing';

import { ProdutosApiService } from './produtos-api.service';

describe('ProdutosApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutosApiService = TestBed.get(ProdutosApiService);
    expect(service).toBeTruthy();
  });
});
