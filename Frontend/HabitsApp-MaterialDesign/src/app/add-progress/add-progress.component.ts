import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { HabitsWorkoutService } from "../habits-workout.service";

export interface HabitsProgressInfo {
  id: number;
  data: string;
  status: string;
  habitsId: number;
}

@Component({
  selector: "app-add-progress",
  templateUrl: "./add-progress.component.html",
  styleUrls: ["./add-progress.component.css"]
})
export class AddProgressComponent implements OnInit {
  @Output() habitsProgressCreated = new EventEmitter<any>();
  habitsProgressInfo: HabitsProgressInfo;
  dataHabits: any;

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

  public addHabitsProgressRecord(): void {
    this.habitsProgressCreated.emit(this.habitsProgressInfo);
  }
}
