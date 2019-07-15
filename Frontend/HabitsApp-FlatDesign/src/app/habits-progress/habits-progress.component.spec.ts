import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsProgressComponent } from './habits-progress.component';

describe('HabitsProgressComponent', () => {
  let component: HabitsProgressComponent;
  let fixture: ComponentFixture<HabitsProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitsProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
