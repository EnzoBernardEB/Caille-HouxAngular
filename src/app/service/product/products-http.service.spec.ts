import { TestBed } from '@angular/core/testing';

import { ProductsHttpService } from './products-http-service.service';

describe('ProductsHttpServiceService', () => {
  let service: ProductsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
