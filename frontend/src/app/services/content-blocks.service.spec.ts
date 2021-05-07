import { TestBed } from '@angular/core/testing';

import { ContentBlocksService } from './content-blocks.service';

describe('ContentBlocksService', () => {
  let service: ContentBlocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentBlocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
