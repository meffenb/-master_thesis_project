import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHabitsComponent } from './grid-habits.component';

describe('GridHabitsComponent', () => {
  let component: GridHabitsComponent;
  let fixture: ComponentFixture<GridHabitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHabitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
