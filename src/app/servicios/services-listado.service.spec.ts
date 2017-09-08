import { TestBed, inject } from '@angular/core/testing';

import { ServicesListadoService } from './services-listado.service';

describe('ServicesListadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesListadoService]
    });
  });

  it('should be created', inject([ServicesListadoService], (service: ServicesListadoService) => {
    expect(service).toBeTruthy();
  }));
});
