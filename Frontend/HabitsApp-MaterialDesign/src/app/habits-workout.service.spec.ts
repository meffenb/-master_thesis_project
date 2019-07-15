import { TestBed, inject } from '@angular/core/testing';

import { HabitsWorkoutService } from './habits-workout.service';

describe('HabitsWorkoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HabitsWorkoutService]
    });
  });

  it('should be created', inject([HabitsWorkoutService], (service: HabitsWorkoutService) => {
    expect(service).toBeTruthy();
  }));
});
