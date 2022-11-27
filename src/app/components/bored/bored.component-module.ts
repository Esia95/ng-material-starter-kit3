import { NgModule } from '@angular/core';
import { BoredComponent } from './bored.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
    MatCardModule
  ],
  declarations: [BoredComponent],
  providers: [],
  exports: [BoredComponent]
})
export class BoredComponentModule {
}
