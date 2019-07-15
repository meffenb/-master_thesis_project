import { Component, ViewChild, OnInit } from "@angular/core";
import * as _ from "lodash";
import { HabitsProgressService } from "../habits-progress.service";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { MatDialog, MatDialogRef } from "@angular/material";
import { HabitsWorkoutService } from "../habits-workout.service";
import _default_3 from "@fullcalendar/core/structs/recurring-event-simple";

@Component({
  selector: "app-grid-progress",
  templateUrl: "./grid-progress.component.html",
  styleUrls: ["./grid-progress.component.css"]
})
export class GridProgressComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  habitsData: any;
  dataProgress: Array<any>;
  displayedColumnsProgress = ["id", "data", "status", "habitsID", "operations"];
  dataSourceProgress: any = new MatTableDataSource();
  dataCircleDiagram: any;
  dataBarDiagram: any;
  loading = true;

  constructor(
    private habitsProgressService: HabitsProgressService,
    private habitsWorkoutService: HabitsWorkoutService,
    public dialog: MatDialog
  ) {}
  applyFilter(filterValue: string) {
    this.dataSourceProgress.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.habitsProgressService.getProgress().subscribe((data: any) => {
      this.dataProgress = data;
      this.dataSourceProgress.data = data;
      this.dataSourceProgress.paginator = this.paginator;
    });

    this.habitsWorkoutService.get().subscribe((data: any) => {
      this.habitsData = data;
    });

      this.loading = false;

      this.dataCircleDiagram = {
        labels: [
          this.habitsData[0].name,
          this.habitsData[1].name,
          this.habitsData[2].name
        ],
        datasets: [
          {
            data: [12, 21, 11],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      };

      this.dataBarDiagram = {
        labels: ["March", "April", "May"],
        datasets: [
          {
            label: this.habitsData[0].name,
            backgroundColor: "#FF6384",
            borderColor: "#FF6384",
            data: [0, 2, 3],
            fill: false
          },
          {
            label: this.habitsData[1].name,
            backgroundColor: "#36A2EB",
            borderColor: "#36A2EB",
            data: [0, 0, 1],
            fill: false
          },
          {
            label: this.habitsData[2].name,
            backgroundColor: "#FFCE56",
            borderColor: "#FFCE56",
            data: [0, 0, 1],
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
      width: "600px"
    });
  }
}

@Component({
  selector: "dialog-add-progress",
  templateUrl: "./dialog-add-progress.html",
  styleUrls: ["./grid-progress.component.css"]
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
