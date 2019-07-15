import {
  Component,
  Output,
  ViewChild,
  EventEmitter
} from "@angular/core";
import { HabitsWorkoutService } from "../habits-workout.service";
import * as _ from "lodash";
import { HabitsProgressService } from "../habits-progress.service";
import { HabitsCategoryService } from "../habits-category.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import dayGridPlugin from "@fullcalendar/daygrid";

export class Events {
  title: string;
  start: string;
  color: string;
}

export class DataSource {
  id: number;
  name: string;
  description: string;
  habitsCategoriesId: number;
  startDate: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  @Output() recordProgressDeleted = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumnsProgress = ["id", "data", "status", "operations"];
  dataSourceProgress: any = new MatTableDataSource();
  dataSourceCategory: any;
  dataSourceHabit: DataSource[];
  dataHabits: any;
  dataProgress: Array<any>;
  calendarPlugins = [dayGridPlugin];
  events: Events[];
  id: any;
  loading = true;

  constructor(
    private habitsWorkoutService: HabitsWorkoutService,
    private router: Router,
    private route: ActivatedRoute,
    private habitsProgressService: HabitsProgressService,
    private habitsCategoryService: HabitsCategoryService
  ) {
    this.route.snapshot.paramMap.get("id");
    this.id = this.route.snapshot.paramMap.get("id");
    this.id = this.id - 28;
  }

  ngOnInit(): void {
    this.habitsWorkoutService.get().subscribe((data: any) => {
      this.dataHabits = data;
    });

    this.habitsProgressService.getProgress().subscribe((data: any) => {
      this.dataProgress = data;
      this.dataSourceProgress.data = data;
      this.dataSourceProgress.paginator = this.paginator;
    });

    this.habitsCategoryService
      .getCategory()
      .subscribe((data: any) => (this.dataSourceCategory = data));

    setTimeout(() => {
      this.loading = false;
      this.dataSourceHabit = this.dataHabits[this.id];
    }, 1000);

    this.events = [
      {
        title: "completed",
        start: "2019-05-11",
        color: "#5C6BC0"
      },
      {
        title: "missed",
        start: "2019-05-12",
        color: "#F50057"
      },
      {
        title: "completed",
        start: "2019-05-13",
        color: "#5C6BC0"
      },
      {
        title: "completed",
        start: "2019-05-14",
        color: "#5C6BC0"
      },
      {
        title: "completed",
        start: "2019-05-16",
        color: "#5C6BC0"
      },
      {
        title: "completed",
        start: "2019-05-22",
        color: "#5C6BC0"
      },
      {
        title: "missed",
        start: "2019-05-23",
        color: "#F50057"
      },
      {
        title: "completed",
        start: "2019-05-31",
        color: "#5C6BC0"
      },
      {
        title: "completed",
        start: "2019-06-01",
        color: "#5C6BC0"
      },
      {
        title: "missed",
        start: "2019-06-02",
        color: "#F50057"
      },
      {
        title: "completed",
        start: "2019-06-03",
        color: "#5C6BC0"
      }
    ];
  }

  removeProgress(record: any) {
    this.recordProgressDeleted.emit(record);
    const deleteIndex = _.findIndex(this.dataProgress, {
      id: record.id
    });
    this.habitsProgressService
      .removeProgress(record)
      .subscribe(result => this.dataProgress.splice(deleteIndex, 1));
    location.reload();
  }
}
