import { TestBed } from '@angular/core/testing';

import { EnfantService } from './enfant.service';
import {NgPipesModule} from 'ngx-pipes';

describe('EnfantService', () => {

  let service: EnfantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnfantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
