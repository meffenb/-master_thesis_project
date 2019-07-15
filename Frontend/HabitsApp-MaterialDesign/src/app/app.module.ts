import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import {
  GridHabitsComponent,
  DialogAdddHabits
} from "./grid-habits/grid-habits.component";
import { AddHabitsComponent } from "./add-habits/add-habits.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HabitsWorkoutService } from "./habits-workout.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as _ from "lodash";
import { AddProgressComponent } from "./add-progress/add-progress.component";
import {
  GridProgressComponent,
  DialogAddProgress
} from "./grid-progress/grid-progress.component";
import { HabitsProgressService } from "./habits-progress.service";
import { GridCategoryComponent } from "./grid-category/grid-category.component";
import { HabitsCategoryService } from "./habits-category.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyMaterialModule } from "./material.module";
import { MatNativeDateModule } from "@angular/material";
import { MatGridListModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartModule } from "primeng/chart";
import { FullCalendarModule } from "@fullcalendar/angular";
import { CalendarModule } from "primeng/calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  MatRippleModule,
  MatCheckboxModule,
  MatInputModule
} from "@angular/material";

const appRoutes: Routes = [
  { path: "habits", component: GridHabitsComponent },
  { path: "progress", component: GridProgressComponent },
  { path: "category", component: GridCategoryComponent },
  { path: "addHabits", component: AddHabitsComponent },
  { path: "addProgress", component: AddProgressComponent },
  { path: "habits_id/:id", component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridHabitsComponent,
    AddHabitsComponent,
    AddProgressComponent,
    GridProgressComponent,
    GridCategoryComponent,
    DialogAdddHabits,
    DialogAddProgress
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatGridListModule,
    FlexLayoutModule,
    ChartModule,
    FullCalendarModule,
    CalendarModule,
    MatRippleModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [
    HabitsWorkoutService,
    HabitsProgressService,
    HabitsCategoryService
  ],
  bootstrap: [AppComponent, DialogAdddHabits, DialogAddProgress]
})
export class AppModule {}
