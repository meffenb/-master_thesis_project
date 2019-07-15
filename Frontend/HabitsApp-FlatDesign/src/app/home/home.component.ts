import { Component } from "@angular/core";
import { HabitsWorkoutService } from "../habits-workout.service";
import * as _ from "lodash";
import { HabitsProgressService } from "../habits-progress.service";
import { HabitsCategoryService } from "../habits-category.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
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
  habitsCategoriesId: string;
  startDate: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  dataHabits: Array<any>;
  dataProgress: Array<any>;
  dataCategory: Array<any>;
  dataOneHabit: DataSource[];
  events: Events[];
  calendarPlugins = [dayGridPlugin];
  id: any;
  pagePagination = 1;
  pageSizePagination = 4;
  collectionSizePagination: number;

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
    this.habitsWorkoutService
      .get()
      .subscribe((data: any) => (this.dataHabits = data));

    this.habitsProgressService.getProgress().subscribe((data: any) => {
      this.dataProgress = data;
      this.collectionSizePagination = this.dataProgress.length;
    });

    this.habitsCategoryService
      .getCategory()
      .subscribe((data: any) => (this.dataCategory = data));

    setTimeout(() => {
      this.dataOneHabit = this.dataHabits[this.id];
    }, 1000);

    this.events = [
      {
        title: "completed",
        start: "2019-05-09",
        color: "#4FC1E9"
      },
      {
        title: "completed",
        start: "2019-05-11",
        color: "#4FC1E9"
      },
      {
        title: "missed",
        start: "2019-05-12",
        color: "#FC6E51"
      },
      {
        title: "completed",
        start: "2019-05-13",
        color: "#4FC1E9"
      },
      {
        title: "completed",
        start: "2019-05-14",
        color: "#4FC1E9"
      },
      {
        title: "completed",
        start: "2019-05-16",
        color: "#4FC1E9"
      },
      {
        title: "completed",
        start: "2019-05-22",
        color: "#4FC1E9"
      },
      {
        title: "missed",
        start: "2019-05-23",
        color: "#FC6E51"
      },
      {
        title: "completed",
        start: "2019-05-22",
        color: "#4FC1E9"
      },
      {
        title: "missed",
        start: "2019-05-23",
        color: "#FC6E51"
      },
      {
        title: "completed",
        start: "2019-05-31",
        color: "#4FC1E9"
      },
      {
        title: "completed",
        start: "2019-06-01",
        color: "#4FC1E9"
      },
      {
        title: "missed",
        start: "2019-06-02",
        color: "#FC6E51"
      },
      {
        title: "completed",
        start: "2019-06-03",
        color: "#4FC1E9"
      }
    ];
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
}
