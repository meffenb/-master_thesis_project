import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { HabitsWorkoutService } from "../habits-workout.service";
export interface HabitsProgressInfo {
  id: number;
  data: string;
  status: string;
  habitsId: number;
}
@Component({
  selector: "app-habits-progress",
  templateUrl: "./habits-progress.component.html",
  styleUrls: ["./habits-progress.component.css"]
})
export class HabitsProgressComponent implements OnInit {
  @Output() habitsProgressCreated = new EventEmitter<any>();
  habitsProgressInfo: HabitsProgressInfo;
  dataHabits: any;
  model: Date;

  constructor(private habitsWorkoutService: HabitsWorkoutService) {
    habitsWorkoutService.get().subscribe(data => {
      this.dataHabits = data;
    });
    this.clearHabitsProgressInfo();
  }

  ngOnInit() {}

  private clearHabitsProgressInfo = function() {
    this.habitsProgressInfo = {
      id: undefined,
      data: "",
      status: "",
      habitsId: 0
    };
  };

  public addHabitsProgressRecord() {
    this.habitsProgressCreated.emit(this.habitsProgressInfo);
  }
}
