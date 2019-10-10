import { TestBed } from '@angular/core/testing';

import { DadosFrontService } from './dados-front.service';

describe('DadosFrontService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadosFrontService = TestBed.get(DadosFrontService);
    expect(service).toBeTruthy();
  });
});
