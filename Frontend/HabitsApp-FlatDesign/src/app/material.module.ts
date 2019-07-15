import { NgModule } from "@angular/core";
import { MatIconModule, MatDialogModule } from "@angular/material";

@NgModule({
  imports: [MatIconModule, MatDialogModule],
  exports: [MatIconModule, MatDialogModule]
})
export class MyMaterialModule {}
