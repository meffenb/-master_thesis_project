import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProgressComponent } from './grid-progress.component';

describe('GridProgressComponent', () => {
  let component: GridProgressComponent;
  let fixture: ComponentFixture<GridProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
