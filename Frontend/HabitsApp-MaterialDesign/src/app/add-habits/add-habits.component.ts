import { Component, EventEmitter, Output, OnInit } from "@angular/core";

export interface DataHabits {
  id: number;
  name: string;
  description: string;
  habitsCategoriesId: number;
  startDate: Date;
}

@Component({
  selector: "app-add-habits",
  templateUrl: "./add-habits.component.html",
  styleUrls: ["./add-habits.component.css"]
})
export class AddHabitsComponent implements OnInit {
  @Output() habitsCreated = new EventEmitter<any>();
  dataHabits: DataHabits;

  options = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Health" },
    { id: 3, name: "Education" },
    { id: 4, name: "Work" },
    { id: 5, name: "Home" }
  ];

  constructor() {
    this.clearHabitsInfo();
  }

  ngOnInit() {}

  private clearHabitsInfo = function() {
    this.dataHabits = {
      id: undefined,
      name: "",
      description: "",
      habitsCategoriesId: 0
    };
  };

  public addHabitsRecord(): void {
    this.habitsCreated.emit(this.dataHabits);
  }
}
