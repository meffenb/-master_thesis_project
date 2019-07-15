import { Component, ViewChild, OnInit } from "@angular/core";
import { HabitsWorkoutService } from "../habits-workout.service";
import * as _ from "lodash";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-grid-habits",
  templateUrl: "./grid-habits.component.html",
  styleUrls: ["./grid-habits.component.css"]
})
export class GridHabitsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataHabits: Array<any>;
  displayedColumnsHabits = ["name", "description", "habitsdate", "operations"];
  dataSourceHabits: any = new MatTableDataSource();
  indexHabits: number;
  loading = true;

  constructor(
    public dialog: MatDialog,
    private habitsWorkoutService: HabitsWorkoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.habitsWorkoutService
      .get()
      .subscribe((data: any) => (this.dataHabits = data));

    this.habitsWorkoutService.get().subscribe((data: any) => {
      this.dataSourceHabits.data = data;
      this.dataSourceHabits.paginator = this.paginator;
    });

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  applyFilter(filterValue: string) {
    this.dataSourceHabits.filter = filterValue.trim().toLowerCase();
  }

  removeHabit(record: any) {
    const deleteIndex = _.findIndex(this.dataHabits, { id: record.id });
    this.habitsWorkoutService
      .remove(record)
      .subscribe(result => this.dataHabits.splice(deleteIndex, 1));
    location.reload();
  }

  onAddNewHabit(): void {
    this.dialog.open(DialogAdddHabits, {
      width: "600px"
    });
  }

  selectRow(row: any) {
    this.indexHabits = row.id;
    this.router.navigate(["habits_id/", this.indexHabits]);
  }
}

@Component({
  selector: "dialog-add-habits",
  templateUrl: "./dialog-add-habits.html"
})
export class DialogAdddHabits {
  constructor(
    public dialogRef: MatDialogRef<DialogAdddHabits>,
    private habitsWorkoutService: HabitsWorkoutService
  ) {}

  createHabits(habits: any): void {
    this.habitsWorkoutService.add(habits).subscribe(() => {
      this.dialogRef.close();
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
