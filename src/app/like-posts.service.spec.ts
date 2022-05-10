import { TestBed } from '@angular/core/testing';

import { LikePostsService } from './like-posts.service';

describe('LikePostsService', () => {
  let service: LikePostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikePostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
