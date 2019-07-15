import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HabitsWorkoutService } from "../habits-workout.service";
import * as _ from "lodash";

@Component({
  selector: "app-grid-category",
  templateUrl: "./grid-category.component.html",
  styleUrls: ["./grid-category.component.css"]
})
export class GridCategoryComponent implements OnInit {
  @Output() recordDeleted = new EventEmitter<any>();
  dataSourceHabits: any;
  pagePagination = 1;
  pageSizePagination = 4;
  collectionSizePagination: number;

  category = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Health" },
    { id: 3, name: "Education" },
    { id: 4, name: "Work" },
    { id: 5, name: "Home" }
  ];

  constructor(private habitsWorkoutService: HabitsWorkoutService) {
  }

  ngOnInit(): void {
    this.habitsWorkoutService.get().subscribe((data2: any) => {
      this.dataSourceHabits = data2;
      this.collectionSizePagination = this.dataSourceHabits.length;
    });
  }

  removeHabit(record: any) {
    this.recordDeleted.emit(record);
    const deleteIndex = _.findIndex(this.dataSourceHabits.data, {
      id: record.id
    });
    this.habitsWorkoutService
      .remove(record)
      .subscribe(result => this.dataSourceHabits.data.splice(deleteIndex, 1));
    location.reload();
  }
}
