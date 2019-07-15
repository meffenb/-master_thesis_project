import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import {
  GridHabitsComponent,
  DialogAdddHabits
} from "./grid-habits/grid-habits.component";
import { AddOrUpdateHabitsComponent } from "./add-or-update-habits/add-or-update-habits.component";

import { RouterModule, Routes } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";
import { HabitsWorkoutService } from "./habits-workout.service";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as _ from "lodash";
import { HabitsProgressComponent } from "./habits-progress/habits-progress.component";
import {
  GridProgressComponent,
  DialogAddProgress
} from "./grid-progress/grid-progress.component";

import { HabitsProgressService } from "./habits-progress.service";
import { GridCategoryComponent } from "./grid-category/grid-category.component";
import { HabitsCategoryService } from "./habits-category.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatNativeDateModule } from "@angular/material";
import { MatGridListModule } from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";

import { ChartModule } from "primeng/chart";
import { FullCalendarModule } from "@fullcalendar/angular";
import { CalendarModule } from "primeng/calendar";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MatIconModule } from "@angular/material";

import { MyMaterialModule } from "./material.module";

const appRoutes: Routes = [
  { path: "habits", component: GridHabitsComponent },
  { path: "progress", component: GridProgressComponent },
  { path: "category", component: GridCategoryComponent },
  { path: "addHabits", component: AddOrUpdateHabitsComponent },
  { path: "addProgress", component: HabitsProgressComponent },
  { path: "habits_id/:id", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridHabitsComponent,
    AddOrUpdateHabitsComponent,
    HabitsProgressComponent,
    GridProgressComponent,
    GridCategoryComponent,
    DialogAdddHabits,
    DialogAddProgress
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    NgbModule,
    MatIconModule,
    MyMaterialModule
  ],
  providers: [
    HabitsWorkoutService,
    HabitsProgressService,
    HabitsCategoryService
  ],
  bootstrap: [AppComponent, DialogAdddHabits, DialogAddProgress]
})
export class AppModule {}
