import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateHabitsComponent } from './add-or-update-habits.component';

describe('AddOrUpdateHabitsComponent', () => {
  let component: AddOrUpdateHabitsComponent;
  let fixture: ComponentFixture<AddOrUpdateHabitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateHabitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
