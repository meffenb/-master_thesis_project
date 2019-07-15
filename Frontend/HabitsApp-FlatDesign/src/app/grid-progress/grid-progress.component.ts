import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { HabitsProgressService } from "../habits-progress.service";
import { MatDialog, MatDialogRef } from "@angular/material";
import { HabitsWorkoutService } from "../habits-workout.service";

@Component({
  selector: "app-grid-progress",
  templateUrl: "./grid-progress.component.html",
  styleUrls: ["./grid-progress.component.css"]
})
export class GridProgressComponent implements OnInit {
  dataProgress: Array<any>;
  dataCircleDiagram: any;
  dataBarDiagram: any;
  habitsData: any;
  pagePagination = 1;
  pageSizePagination = 4;
  collectionSizePagination: any;

  constructor(
    private habitsProgressService: HabitsProgressService,
    private habitsWorkoutService: HabitsWorkoutService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.habitsProgressService.getProgress().subscribe((data1: any) => {
      this.dataProgress = data1;
      this.collectionSizePagination = this.dataProgress.length;
    });

    this.habitsWorkoutService.get().subscribe((data: any) => {
      this.habitsData = data;
    });

    this.dataCircleDiagram = {
      labels: [
        this.habitsData[0].name,
        this.habitsData[1].name,
        this.habitsData[2].name
      ],
      datasets: [
        {
          data: [12, 21, 11],
          backgroundColor: ["#5D9CEC", "#4FC1E9", "#FC6E51"],
          hoverBackgroundColor: ["#5D9CEC ", "#4FC1E9", "#FC6E51"]
        }
      ]
    };

    this.dataBarDiagram = {
      labels: ["March", "April", "May"],
      datasets: [
        {
          label: this.habitsData[0].name,
          backgroundColor: "#5D9CEC",
          borderColor: "#5D9CEC",
          data: [3, 20, 12],
          fill: false
        },
        {
          label: this.habitsData[1].name,
          backgroundColor: "#4FC1E9",
          borderColor: "#4FC1E9",
          data: [0, 2, 21],
          fill: false
        },
        {
          label: this.habitsData[2].name,
          backgroundColor: "#FC6E51",
          borderColor: "#FC6E51",
          data: [0, 0, 11],
          fill: false
        }
      ]
    };
  }

  removeProgress(record: any) {
    const deleteIndex = _.findIndex(this.dataProgress, {
      id: record.id
    });
    this.habitsProgressService
      .removeProgress(record)
      .subscribe(result => this.dataProgress.splice(deleteIndex, 1));
    location.reload();
  }

  onAddNewProgress() {
    this.dialog.open(DialogAddProgress, {
      width: "600px",
      height: "600px"
    });
  }
}

@Component({
  selector: "dialog-add-progress",
  templateUrl: "./dialog-add-progress.html"
})
export class DialogAddProgress {
  constructor(
    public dialogRef: MatDialogRef<DialogAddProgress>,
    private habitsProgressService: HabitsProgressService
  ) {}

  createProgress(progress: any): void {
    this.habitsProgressService.addProgress(progress).subscribe(() => {
      this.dialogRef.close();
    });
  }

  cancelClick(): void {
    this.dialogRef.close();
  }
}
