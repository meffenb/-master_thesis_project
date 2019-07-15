import { TestBed, inject } from '@angular/core/testing';

import { HabitsCategoryService } from './habits-category.service';

describe('HabitsCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HabitsCategoryService]
    });
  });

  it('should be created', inject([HabitsCategoryService], (service: HabitsCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
