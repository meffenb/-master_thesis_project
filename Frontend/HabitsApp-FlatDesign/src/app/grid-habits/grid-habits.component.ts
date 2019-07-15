import { Component, OnInit } from "@angular/core";
import { HabitsWorkoutService } from "../habits-workout.service";
import * as _ from "lodash";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-grid-habits",
  templateUrl: "./grid-habits.component.html",
  styleUrls: ["./grid-habits.component.css"]
})
export class GridHabitsComponent implements OnInit {
  dataHabits: Array<any>;
  indexHabits: any;
  pagePagination = 1;
  pageSizePagination = 4;
  collectionSizePagination: any;

  constructor(
    private habitsworkoutService: HabitsWorkoutService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.habitsworkoutService.get().subscribe((data: any) => {
      this.dataHabits = data;
      this.collectionSizePagination = this.dataHabits.length;
    });
  }

  removeHabit(record: any) {
    const deleteIndex = _.findIndex(this.dataHabits, { id: record.id });
    this.habitsworkoutService
      .remove(record)
      .subscribe(result => this.dataHabits.splice(deleteIndex, 1));
    location.reload();
  }

  onAddNewHabit(): void {
    this.dialog.open(DialogAdddHabits, {
      width: "600px",
      height: "600px"
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

  cancelClick(): void {
    this.dialogRef.close();
  }
}
