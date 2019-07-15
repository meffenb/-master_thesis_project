import {
  Component,
  ViewChild,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { HabitsWorkoutService } from "../habits-workout.service";
import * as _ from "lodash";
@Component({
  selector: "app-grid-category",
  templateUrl: "./grid-category.component.html",
  styleUrls: ["./grid-category.component.css"]
})
export class GridCategoryComponent implements OnInit {
  @Output() recordDeleted = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumnsCategory = ["id", "category"];
  displayedColumnsHabits = ["name", "description", "habitsdate", "operations"];
  dataSourceHabits: any = new MatTableDataSource();
  loading = true;

  category = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Health" },
    { id: 3, name: "Education" },
    { id: 4, name: "Work" },
    { id: 5, name: "Home" }
  ];

  constructor(private habitsWorkoutService: HabitsWorkoutService) {}

  applyFilter(filterValue: string) {
    this.dataSourceHabits.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.habitsWorkoutService.get().subscribe((data: any) => {
      this.dataSourceHabits.data = data;
      this.dataSourceHabits.paginator = this.paginator;
    });

    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
